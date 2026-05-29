@echo off
echo --- STARTING FRONTEND SETUP ---
cd frontend
if not exist node_modules (
    echo [INFO] node_modules not found. Running npm install...
    call npm install
)
if not exist node_modules\.bin\vite.ps1 (
    if not exist node_modules\.bin\vite.cmd (
        echo [ERROR] Vite was not installed correctly. Retrying npm install...
        call npm install
    )
)
echo [INFO] Starting React/Vite development server...
call npm run dev
pause
