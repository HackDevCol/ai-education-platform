@echo off
chcp 65001 >nul
echo ==========================================
echo 🚀 EJECUTANDO PROYECTO
echo    Plataforma IA en Educación
echo ==========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js NO está instalado
    echo Por favor instala Node.js primero desde: https://nodejs.org
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo ❌ Las dependencias no están instaladas
    echo.
    echo Por favor ejecuta primero el archivo INSTALAR.bat
    echo.
    pause
    exit /b 1
)

echo ✅ Todo listo
echo.
echo Iniciando servidor...
echo.
echo ==========================================
echo 🌐 Abre tu navegador en:
echo    http://localhost:3000
echo.
echo ⚠️  NO CIERRES esta ventana mientras uses la app
echo.
echo Para detener el servidor:
echo    Presiona Ctrl + C
echo ==========================================
echo.

npm run dev
