# 🤖 Plataforma de IA en Educación

Sistema web desarrollado con Next.js que implementa el patrón MVC para gestionar artículos científicos sobre Inteligencia Artificial en Educación.

## 📋 Descripción del Proyecto

Este software fue desarrollado como parte del **Taller 1 - Bases de Datos** de la asignatura **Nuevas Tecnologías de Desarrollo**, con el objetivo de:

- Documentar búsquedas en bases de datos científicas
- Presentar artículos científicos sobre IA en Educación
- Implementar un sistema CRUD para gestionar herramientas de IA educativas
- Seguir el patrón de arquitectura MVC (Modelo-Vista-Controlador)

## 👥 Integrantes

- **Jeisson Estiber Palma Renteria** - 506231703
- **Julian David Moreno Gutierrez** - 506231015
- **Gustavo Gallego** - 506241038

## 🏗️ Arquitectura MVC

### **Modelo (Model)**
- Ubicación: `/lib/models.ts` y `/lib/data.json`
- Funciones para leer y escribir datos
- Gestión de integrantes, artículos y herramientas

### **Vista (View)**
- Ubicación: `/app/**/*.tsx`
- Componentes de React con Next.js
- Páginas: Inicio, Búsquedas, Artículos, Herramientas

### **Controlador (Controller)**
- Ubicación: `/app/api/**/*.ts`
- API Routes de Next.js
- Endpoints para operaciones CRUD

## 🚀 Características

✅ Visualización del tema de investigación  
✅ Información de búsquedas realizadas por cada integrante  
✅ Catálogo de 6 artículos científicos  
✅ Detalle completo de cada artículo  
✅ **CRUD completo** de Herramientas de IA Educativas:
  - ➕ **Crear** nuevas herramientas
  - 👁️ **Leer** lista de herramientas
  - ✏️ **Actualizar** información
  - 🗑️ **Eliminar** herramientas

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (React)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: JSON (Filesystem)
- **Patrón**: MVC (Modelo-Vista-Controlador)

## 📦 Requisitos Previos

Antes de instalar, asegúrate de tener instalado:

- **Node.js** versión 18 o superior
- **npm** (viene con Node.js)

### Verificar instalación:
```bash
node --version
npm --version
```

## 🔧 Guía de Instalación

### Paso 1: Descargar el Código

```bash
# Opción A:
git clone https://github.com/tu-usuario/ai-education-platform.git
cd ai-education-platform

# Opción B: Si es un archivo ZIP
# 1. Descomprimir el archivo
# 2. Abrir terminal en la carpeta del proyecto
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las librerías necesarias (puede tardar 1-2 minutos).

### Paso 3: Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

### Paso 4: Abrir en el Navegador

Abre tu navegador y ve a:

```
http://localhost:3000
```

¡Listo! El software ya está funcionando. 🎉

## 📱 Uso del Sistema

### Navegación Principal

1. **🏠 Inicio**: Página principal con información del proyecto y estadísticas
2. **🔍 Búsquedas**: Detalle de las cadenas de búsqueda de cada integrante
3. **📚 Artículos**: Catálogo de artículos científicos seleccionados
4. **⚙️ Herramientas IA**: Módulo CRUD para gestionar herramientas

### Funcionalidades CRUD

#### Crear Herramienta
1. Ir a "Herramientas IA"
2. Clic en "➕ Nueva Herramienta"
3. Llenar el formulario
4. Clic en "➕ Crear Herramienta"

#### Editar Herramienta
1. En cualquier tarjeta, clic en el botón "✏️"
2. Modificar los campos deseados
3. Clic en "💾 Guardar Cambios"

#### Eliminar Herramienta
1. En cualquier tarjeta, clic en el botón "🗑️"
2. Confirmar la eliminación

## 📂 Estructura del Proyecto

```
ai-education-platform/
├── app/                      # Aplicación Next.js
│   ├── api/                  # Controladores (API Routes)
│   │   └── herramientas/     # CRUD endpoints
│   ├── articulos/            # Vistas de artículos
│   ├── busquedas/            # Vistas de búsquedas
│   ├── herramientas/         # Vistas CRUD
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Página de inicio
│   └── globals.css           # Estilos globales
├── lib/                      # Modelos y datos
│   ├── models.ts             # Funciones del modelo
│   └── data.json             # Base de datos JSON
├── package.json              # Dependencias del proyecto
├── tsconfig.json             # Configuración TypeScript
└── tailwind.config.js        # Configuración Tailwind CSS
```

## 🎨 Capturas de Pantalla

### Página Principal
Muestra el tema, motivación y estadísticas del proyecto.

### Búsquedas
Detalla las cadenas de búsqueda y operadores booleanos utilizados.

### Artículos
Catálogo con todos los artículos seleccionados.

### CRUD Herramientas
Sistema completo para gestionar herramientas de IA.

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 is already in use"
```bash
# Opción 1: Cambiar el puerto
npm run dev -- -p 3001

# Opción 2: Matar el proceso en el puerto 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID [número] /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### El CRUD no guarda los cambios
- Verifica que el archivo `lib/data.json` tenga permisos de escritura
- Revisa la consola del navegador (F12) para ver errores

## 📝 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar versión de producción
npm run start

# Verificar errores de código
npm run lint
```

## 🔒 Declaración de Uso de IA

En el desarrollo de este software se utilizaron herramientas de IA como apoyo en:
- Estructuración del código
- Diseño de la interfaz
- Debugging y optimización

El análisis, diseño de la arquitectura y desarrollo fueron realizados por los integrantes del equipo.

## 📚 Referencias

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

## 📧 Contacto

Para dudas o soporte:
- **Materia**: Nuevas Tecnologías de Desarrollo
- **Profesora**: Cecilia Avila Garzon
- **Institución**: Fundación Universitaria Konrad Lorenz

---

**© 2026 - Taller 1 Bases de Datos - Ingeniería de Sistemas**
"# ai-education-platform" 
