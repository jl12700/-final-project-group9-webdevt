@echo off
setlocal enabledelayedexpansion

:: Start servers
start /B "" cmd /c "npm start"
start /B "" cmd /c "json-server --watch src/DATA/equipment.json --port 5000"
start /B "" cmd /c "json-server --watch src/DATA/reservation.json --port 5001"
start /B "" cmd /c "json-server --watch src/DATA/user.json --port 5002"

:: Wait for servers to initialize (you might need to adjust the timeout based on your server startup time)
timeout /t 10 >nul

:loop
set /p input=Type "stop" to close servers: 
if /i "!input!"=="stop" (
    taskkill /f /im node.exe
    echo Servers stopped.
    exit /b
)
goto loop