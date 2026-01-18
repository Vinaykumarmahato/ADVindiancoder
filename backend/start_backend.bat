@echo off
echo Starting Backend...
call mvn spring-boot:run
if %ERRORLEVEL% NEQ 0 (
    echo Backend failed with error code %ERRORLEVEL%
    pause
)
pause
