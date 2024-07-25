@echo off

:: activating backend virtual environment
cd backend 
call env/Scripts/activate.bat

:: installing dependencies
pip install -r requirements.txt

:: migrating database
python manage.py makemigrations
python manage.py migrate

:: creating super user
python manage.py createsuperuser

:: run the backend server
python manage.py runserver