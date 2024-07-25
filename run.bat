@echo off

:: Starting the backend server
start cmd /k "cd backend && call env/Scripts/activate.bat && python manage.py runserver"

:: Starting the frontend server
start cmd /k "cd frontend && npm run dev"