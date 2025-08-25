# Cloudflare Setup Script for Las Vegas Relocation Services
# This script helps configure Cloudflare with your credentials

param(
    [string]$ApiToken = "",
    [switch]$SkipVerification
)

Write-Host "🔧 Cloudflare Setup for Las Vegas Relocation Services" -ForegroundColor Green
Write-Host "=====================================================" -ForegroundColor Green

# Display current configuration
Write-Host "📋 Current Cloudflare Configuration:" -ForegroundColor Blue
Write-Host "Zone ID: 48655987a584eb3068e3820930b6cd91" -ForegroundColor Green
Write-Host "Account ID: 2cc579c1ec9e426ed585e933ebf4753b" -ForegroundColor Green

if ($ApiToken) {
    Write-Host "API Token: $($ApiToken.Substring(0, 8))..." -ForegroundColor Green
} else {
    Write-Host "API Token: Not set" -ForegroundColor Yellow
}

Write-Host ""

# Check if .env.local exists
if (Test-Path ".env.local") {
    Write-Host "✅ .env.local file found" -ForegroundColor Green
    
    # Check if Cloudflare variables are set
    $envContent = Get-Content ".env.local" -Raw
    $zoneIdSet = $envContent -match "NEXT_PUBLIC_CLOUDFLARE_ZONE_ID=48655987a584eb3068e3820930b6cd91"
    $accountIdSet = $envContent -match "NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID=2cc579c1ec9e426ed585e933ebf4753b"
    
    if ($zoneIdSet -and $accountIdSet) {
        Write-Host "✅ Cloudflare Zone ID and Account ID are configured" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Cloudflare credentials need to be added to .env.local" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  .env.local file not found. Creating from example..." -ForegroundColor Yellow
    
    if (Test-Path "env.local.example") {
        Copy-Item "env.local.example" ".env.local"
        Write-Host "✅ Created .env.local from example" -ForegroundColor Green
    } else {
        Write-Host "❌ env.local.example not found" -ForegroundColor Red
        exit 1
    }
}

# Set API token if provided
if ($ApiToken) {
    Write-Host "🔑 Setting Cloudflare API Token..." -ForegroundColor Blue
    
    $envContent = Get-Content ".env.local" -Raw
    if ($envContent -match "CLOUDFLARE_API_TOKEN=") {
        $envContent = $envContent -replace "CLOUDFLARE_API_TOKEN=.*", "CLOUDFLARE_API_TOKEN=$ApiToken"
    } else {
        $envContent += "`nCLOUDFLARE_API_TOKEN=$ApiToken"
    }
    
    Set-Content ".env.local" $envContent
    Write-Host "✅ API Token set in .env.local" -ForegroundColor Green
}

# Verify configuration files
Write-Host "🔍 Verifying Cloudflare configuration files..." -ForegroundColor Blue

$requiredFiles = @(
    "_headers",
    "_redirects", 
    "wrangler.toml",
    "src/worker.js",
    "cloudflare.config.js"
)

$allFilesPresent = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ Missing: $file" -ForegroundColor Red
        $allFilesPresent = $false
    }
}

if (-not $allFilesPresent) {
    Write-Host "❌ Some configuration files are missing. Please check the setup." -ForegroundColor Red
    exit 1
}

# Check if files are in correct locations
Write-Host "🔍 Checking file locations..." -ForegroundColor Blue

if (Test-Path "public/_headers") {
    Write-Host "✅ _headers in public directory" -ForegroundColor Green
} else {
    Write-Host "⚠️  Moving _headers to public directory..." -ForegroundColor Yellow
    if (Test-Path "_headers") {
        Move-Item "_headers" "public/_headers"
        Write-Host "✅ Moved _headers to public directory" -ForegroundColor Green
    }
}

if (Test-Path "public/_redirects") {
    Write-Host "✅ _redirects in public directory" -ForegroundColor Green
} else {
    Write-Host "⚠️  Moving _redirects to public directory..." -ForegroundColor Yellow
    if (Test-Path "_redirects") {
        Move-Item "_redirects" "public/_redirects"
        Write-Host "✅ Moved _redirects to public directory" -ForegroundColor Green
    }
}

# Display next steps
Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://dash.cloudflare.com/" -ForegroundColor White
Write-Host "2. Add your domain: lasvegasrelocationservices.com" -ForegroundColor White
Write-Host "3. Update nameservers to point to Cloudflare" -ForegroundColor White
Write-Host "4. Create API Token with 'Edit zone settings' permissions" -ForegroundColor White
Write-Host "5. Add the API token to your .env.local file" -ForegroundColor White
Write-Host "6. Enable these features in Cloudflare dashboard:" -ForegroundColor White
Write-Host "   - Auto Minify (HTML, CSS, JS)" -ForegroundColor White
Write-Host "   - Brotli compression" -ForegroundColor White
Write-Host "   - Early Hints" -ForegroundColor White
Write-Host "   - Rocket Loader" -ForegroundColor White
Write-Host "   - HSTS" -ForegroundColor White
Write-Host "   - WAF (Web Application Firewall)" -ForegroundColor White

Write-Host ""
Write-Host "🚀 When ready to deploy:" -ForegroundColor Cyan
Write-Host "npm run deploy:cloudflare" -ForegroundColor White

Write-Host ""
Write-Host "📊 To verify optimization:" -ForegroundColor Cyan
Write-Host "- Check PageSpeed Insights" -ForegroundColor White
Write-Host "- Monitor Cloudflare Analytics" -ForegroundColor White
Write-Host "- Verify cache headers in browser dev tools" -ForegroundColor White

Write-Host ""
Write-Host "🎉 Cloudflare setup configuration complete!" -ForegroundColor Green
