#!/usr/bin/env pwsh

Write-Host "🚀 Las Vegas Relocation Services - Environment Setup" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green

# Check if .env.local exists
if (Test-Path ".env.local") {
    Write-Host "⚠️  .env.local already exists. Backing up..." -ForegroundColor Yellow
    Copy-Item ".env.local" ".env.local.backup.$(Get-Date -Format 'yyyyMMdd-HHmmss')"
}

# Copy example to local
Write-Host "📋 Creating .env.local from template..." -ForegroundColor Blue
Copy-Item ".env.example" ".env.local"

# Generate NextAuth secret
Write-Host "🔐 Generating NextAuth secret..." -ForegroundColor Blue
try {
    $nextAuthSecret = openssl rand -base64 32
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ NextAuth secret generated successfully" -ForegroundColor Green
        Write-Host "🔑 Add this to your .env.local: NEXTAUTH_SECRET=$nextAuthSecret" -ForegroundColor Cyan
    } else {
        Write-Host "⚠️  Could not generate NextAuth secret with openssl" -ForegroundColor Yellow
        Write-Host "🔑 Use online generator: https://generate-secret.vercel.app/32" -ForegroundColor Cyan
    }
} catch {
    Write-Host "⚠️  Could not generate NextAuth secret with openssl" -ForegroundColor Yellow
    Write-Host "🔑 Use online generator: https://generate-secret.vercel.app/32" -ForegroundColor Cyan
}

# Install essential dependencies
Write-Host "📦 Installing essential dependencies..." -ForegroundColor Blue
$dependencies = @(
    "resend",
    "@supabase/supabase-js", 
    "next-auth",
    "mapbox-gl",
    "@formspree/react",
    "@vercel/analytics"
)

foreach ($dep in $dependencies) {
    Write-Host "Installing $dep..." -ForegroundColor Yellow
    npm install $dep
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ $dep installed successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install $dep" -ForegroundColor Red
    }
}

# Create basic API routes directory
Write-Host "📁 Creating API routes structure..." -ForegroundColor Blue
$apiDirs = @(
    "src/app/api/contact",
    "src/app/api/auth",
    "src/app/api/webhooks",
    "src/app/api/health"
)

foreach ($dir in $apiDirs) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "✅ Created $dir" -ForegroundColor Green
    }
}

# Create basic API route files
Write-Host "📝 Creating basic API route files..." -ForegroundColor Blue

# Contact API route
$contactApi = @"
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // TODO: Implement your contact form logic here
    // Example: Send email via Resend, save to database, etc.
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process message' },
      { status: 500 }
    )
  }
}
"@

Set-Content -Path "src/app/api/contact/route.ts" -Value $contactApi

# Health check API route
$healthApi = @"
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  })
}
"@

Set-Content -Path "src/app/api/health/route.ts" -Value $healthApi

Write-Host "✅ Basic API routes created" -ForegroundColor Green

# Display next steps
Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor Green
Write-Host "=============" -ForegroundColor Green
Write-Host "1. Edit .env.local with your actual API keys" -ForegroundColor Cyan
Write-Host "2. Sign up for free services (see setup-free-services.md)" -ForegroundColor Cyan
Write-Host "3. Test your setup with: npm run dev" -ForegroundColor Cyan
Write-Host "4. Check the setup guide: setup-free-services.md" -ForegroundColor Cyan

Write-Host ""
Write-Host "🔗 Quick Links:" -ForegroundColor Green
Write-Host "=============" -ForegroundColor Green
Write-Host "• Google Analytics: https://analytics.google.com/" -ForegroundColor Blue
Write-Host "• Resend (Email): https://resend.com/" -ForegroundColor Blue
Write-Host "• Supabase (Database): https://supabase.com/" -ForegroundColor Blue
Write-Host "• Mapbox (Maps): https://www.mapbox.com/" -ForegroundColor Blue

Write-Host ""
Write-Host "✨ Setup complete! Check .env.local and customize as needed." -ForegroundColor Green
