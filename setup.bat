@echo off

:: backend setup
echo Starting backend...
start cmd /k "call backend.bat"

:: frontend setup
echo Starting frontend...
call frontend.bat
start cmd /k "npm run dev"