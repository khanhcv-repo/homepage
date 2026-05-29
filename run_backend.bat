@echo off
echo --- STARTING BACKEND SETUP ---
cd backend
if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
)
echo Activating virtual environment...
call venv\Scripts\activate
echo Installing requirements...
pip install -r requirements.txt
echo Starting FastAPI server...
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
pause
