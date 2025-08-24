#!/usr/bin/env pwsh

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
try {
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Build successful!" -ForegroundColor Green
    } else {
        Write-Host "❌ Build failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Build error: $_" -ForegroundColor Red
    exit 1
}

# Step 2: Git add all changes
Write-Host "📝 Adding all changes to git..." -ForegroundColor Yellow
try {
    git add .
    Write-Host "✅ Git add successful!" -ForegroundColor Green
} catch {
    Write-Host "❌ Git add error: $_" -ForegroundColor Red
    exit 1
}

# Step 3: Git commit
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
try {
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Auto-deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }
    
    git commit -m $commitMessage
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Git commit successful!" -ForegroundColor Green
    } else {
        Write-Host "❌ Git commit failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Git commit error: $_" -ForegroundColor Red
    exit 1
}

# Step 4: Git push
Write-Host "🚀 Pushing to remote repository..." -ForegroundColor Yellow
try {
    git push
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Git push successful!" -ForegroundColor Green
        Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Git push failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Git push error: $_" -ForegroundColor Red
    exit 1
}

Write-Host "✨ All done! Your changes are now live on GitHub." -ForegroundColor Green
