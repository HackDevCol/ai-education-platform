@echo off
chcp 65001 >nul
echo ==========================================
echo 🚀 INSTALADOR AUTOMÁTICO
echo    Plataforma IA en Educación
echo ==========================================
echo.

echo [1/5] Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js NO está instalado
    echo.
    echo Por favor, instala Node.js desde: https://nodejs.org
    echo Descarga la versión LTS y ejecuta el instalador
    echo.
    echo Después de instalar, reinicia esta terminal y ejecuta este script de nuevo
    pause
    exit /b 1
) else (
    echo ✅ Node.js detectado
    node --version
    npm --version
)

echo.
echo [2/5] Verificando ubicación del proyecto...
if not exist "package.json" (
    echo ❌ ERROR: Este script debe ejecutarse DENTRO de la carpeta ai-education-platform
    echo.
    echo Pasos:
    echo 1. Abre la carpeta ai-education-platform
    echo 2. Haz doble clic en este archivo (INSTALAR.bat)
    echo.
    pause
    exit /b 1
)
echo ✅ Carpeta correcta detectada

echo.
echo [3/5] Instalando dependencias del proyecto...
echo ⏳ Esto puede tomar 2-5 minutos. Por favor espera...
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ Error al instalar dependencias
    echo.
    echo Posibles soluciones:
    echo 1. Verifica tu conexión a internet
    echo 2. Ejecuta este script como Administrador
    echo 3. Ejecuta manualmente: npm cache clean --force
    echo    Luego ejecuta de nuevo este script
    echo.
    pause
    exit /b 1
)
echo ✅ Dependencias instaladas correctamente

echo.
echo [4/5] Verificando instalación...
if not exist "node_modules" (
    echo ❌ Algo salió mal. La carpeta node_modules no existe
    pause
    exit /b 1
)
echo ✅ Instalación verificada

echo.
echo [5/5] Preparando para ejecutar...
echo.
echo ==========================================
echo ✅ ¡INSTALACIÓN COMPLETADA!
echo ==========================================
echo.
echo El proyecto está listo para usarse.
echo.
echo Para ejecutar el proyecto:
echo   1. Ejecuta el archivo EJECUTAR.bat
echo   2. Abre tu navegador en: http://localhost:3000
echo.
echo O ejecuta manualmente en la terminal:
echo   npm run dev
echo.
echo ==========================================
pause
