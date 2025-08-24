@echo off
echo 🚀 Starting deployment process...

echo 📦 Building project...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build successful!

echo 📝 Adding all changes to git...
git add .
if %ERRORLEVEL% neq 0 (
    echo ❌ Git add failed!
    pause
    exit /b 1
)
echo ✅ Git add successful!

echo 💾 Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
    set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
    set "commit_msg=Auto-deploy: %YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"
)

git commit -m "%commit_msg%"
if %ERRORLEVEL% neq 0 (
    echo ❌ Git commit failed!
    pause
    exit /b 1
)
echo ✅ Git commit successful!

echo 🚀 Pushing to remote repository...
git push
if %ERRORLEVEL% neq 0 (
    echo ❌ Git push failed!
    pause
    exit /b 1
)
echo ✅ Git push successful!

echo 🎉 Deployment completed successfully!
echo ✨ All done! Your changes are now live on GitHub.
pause
