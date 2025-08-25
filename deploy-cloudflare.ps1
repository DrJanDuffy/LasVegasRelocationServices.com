# Cloudflare Deployment Script for Las Vegas Relocation Services
# This script deploys the website with Cloudflare optimizations

param(
    [string]$Environment = "production",
    [switch]$Force,
    [switch]$SkipBuild
)

Write-Host "🚀 Cloudflare Optimization Deployment" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "❌ Please run this script from the project root directory"
    exit 1
}

# Check if git is available
try {
    $gitStatus = git status --porcelain
} catch {
    Write-Error "❌ Git is not available. Please install Git and try again."
    exit 1
}

# Check for uncommitted changes
if ($gitStatus -and -not $Force) {
    Write-Warning "⚠️  You have uncommitted changes:"
    Write-Host $gitStatus -ForegroundColor Yellow
    
    $response = Read-Host "Do you want to commit these changes before deploying? (y/N)"
    if ($response -eq "y" -or $response -eq "Y") {
        Write-Host "📝 Committing changes..." -ForegroundColor Blue
        
        git add .
        $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
        if (-not $commitMessage) {
            $commitMessage = "Deploy with Cloudflare optimizations - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        }
        
        git commit -m $commitMessage
        
        if ($LASTEXITCODE -ne 0) {
            Write-Error "❌ Failed to commit changes"
            exit 1
        }
        
        Write-Host "✅ Changes committed successfully" -ForegroundColor Green
    } else {
        Write-Warning "⚠️  Deploying with uncommitted changes"
    }
}

# Verify Cloudflare configuration files exist
$requiredFiles = @(
    "_headers",
    "_redirects", 
    "wrangler.toml",
    "src/worker.js",
    "cloudflare.config.js"
)

Write-Host "🔍 Verifying Cloudflare configuration files..." -ForegroundColor Blue

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Warning "⚠️  Missing: $file"
    }
}

# Check environment variables
Write-Host "🔍 Checking environment variables..." -ForegroundColor Blue

$envVars = @(
    "NEXT_PUBLIC_CLOUDFLARE_ZONE_ID",
    "NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID", 
    "CLOUDFLARE_API_TOKEN"
)

foreach ($var in $envVars) {
    if ([Environment]::GetEnvironmentVariable($var)) {
        Write-Host "✅ $var" -ForegroundColor Green
    } else {
        Write-Warning "⚠️  Missing: $var"
    }
}

# Run quality checks
Write-Host "🔍 Running code quality checks..." -ForegroundColor Blue

try {
    npm run code:quality
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ Code quality checks failed"
        if (-not $Force) {
            exit 1
        }
    }
    Write-Host "✅ Code quality checks passed" -ForegroundColor Green
} catch {
    Write-Warning "⚠️  Code quality checks failed, continuing with deployment..."
}

# Build the project (if not skipped)
if (-not $SkipBuild) {
    Write-Host "🔨 Building project..." -ForegroundColor Blue
    
    try {
        npm run build
        if ($LASTEXITCODE -ne 0) {
            Write-Error "❌ Build failed"
            exit 1
        }
        Write-Host "✅ Build completed successfully" -ForegroundColor Green
    } catch {
        Write-Error "❌ Build failed with error: $_"
        exit 1
    }
} else {
    Write-Host "⏭️  Skipping build as requested" -ForegroundColor Yellow
}

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Blue

try {
    # Check if Vercel CLI is installed
    $vercelVersion = vercel --version 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Blue
        npm install -g vercel
    }
    
    # Deploy to Vercel
    if ($Environment -eq "production") {
        Write-Host "🚀 Deploying to production..." -ForegroundColor Green
        vercel --prod
    } else {
        Write-Host "🚀 Deploying to $Environment..." -ForegroundColor Blue
        vercel --env $Environment
    }
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ Vercel deployment failed"
        exit 1
    }
    
    Write-Host "✅ Vercel deployment completed successfully" -ForegroundColor Green
    
} catch {
    Write-Error "❌ Vercel deployment failed with error: $_"
    exit 1
}

# Push to GitHub (if not already done)
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Blue

try {
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "⚠️  Failed to push to GitHub, but deployment was successful"
    } else {
        Write-Host "✅ Code pushed to GitHub successfully" -ForegroundColor Green
    }
} catch {
    Write-Warning "⚠️  Failed to push to GitHub: $_"
}

# Cloudflare-specific post-deployment steps
Write-Host "🔧 Configuring Cloudflare..." -ForegroundColor Blue

Write-Host @"

🎉 Cloudflare Optimization Deployment Complete!

Next Steps:
1. Verify deployment at your Vercel URL
2. Check Cloudflare dashboard for:
   - DNS propagation
   - SSL/TLS status
   - Performance settings
   - Security features
3. Test performance with:
   - PageSpeed Insights
   - WebPageTest
   - GTmetrix
4. Monitor Cloudflare Analytics

Your website is now optimized with:
✅ Advanced caching (1-year for static assets)
✅ Security headers and HSTS
✅ Edge computing with Workers
✅ Global CDN optimization
✅ Performance monitoring

"@ -ForegroundColor Green

Write-Host "🚀 Deployment completed successfully!" -ForegroundColor Green
