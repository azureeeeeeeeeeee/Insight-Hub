@echo off

:: navigating frontend directory
cd frontend

:: installing dependencies
echo Install project dependencies
npm install

:: run the frontend server
echo Start the frontend server
npm run dev
