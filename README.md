# 🎤 Eminem - Página Tributo

Página web tributo dedicada a **Eminem** (Marshall Bruce Mathers III), uno de los artistas más influyentes en la historia del hip-hop.

## 🚀 Características

- ✨ Diseño moderno y bold inspirado en la estética del hip-hop
- 🎨 Animaciones fluidas con Framer Motion
- 📱 Completamente responsive
- ⚡ Desarrollado con Next.js 14 y TypeScript
- 🎯 Optimizado para rendimiento
- 🌐 Listo para deployment en GitHub Pages

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Google Fonts** - Tipografías (Bebas Neue, Oswald)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/HackDevCol/NTD_Taller2.git
cd NTD_Taller2
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🏗️ Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará una carpeta `out` con los archivos estáticos listos para deployment.

## 🌐 Deployment en GitHub Pages

1. Asegúrate de que tu repositorio esté configurado correctamente
2. Ejecuta el build:
```bash
npm run build
```
3. Los archivos en la carpeta `out` se deployarán automáticamente
4. Ve a Settings → Pages en GitHub
5. Selecciona la rama `main` 
6. Guarda y espera a que se genere el link

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales
├── components/
│   ├── Hero.tsx         # Sección hero
│   ├── Biography.tsx    # Biografía
│   ├── Discography.tsx  # Discografía
│   ├── Awards.tsx       # Premios
│   ├── Legacy.tsx       # Legado
│   └── Footer.tsx       # Footer
├── public/              # Archivos estáticos
├── package.json         # Dependencias
└── next.config.js       # Configuración Next.js
```

## 🎨 Secciones de la Página

1. **Hero** - Presentación impactante con el nombre del artista
2. **Biografía** - Historia de vida y línea de tiempo
3. **Discografía** - Álbumes y estadísticas de ventas
4. **Premios** - Grammys, Oscar, y otros reconocimientos
5. **Legado** - Impacto cultural y canciones icónicas
6. **Footer** - Enlaces y redes sociales

## 👨‍💻 Equipo

- **Jeisson Estiber Palma Renteria** (506231703) - Componentes Hero y Footer
- **Julian David Moreno Gutierrez** (506231015) - Componentes Biography y Awards  
- **Gustavo Gallego** (506241038) - Componentes Discography y Legacy

## 👥 Trabajo Colaborativo

### División de trabajo:

**Jeisson Estiber Palma Renteria:**
- Hero component con animaciones
- Footer component con enlaces sociales
- Configuración inicial del proyecto

**Julian David Moreno Gutierrez:**
- Biography component con timeline
- Awards component con premios
- Estilos globales y configuración de Tailwind

**Gustavo Gallego:**
- Discography component con grid de álbumes
- Legacy component con impacto cultural
- Optimización y testing final

### Flujo de trabajo Git:

```bash
# Clonar el repositorio
git clone https://github.com/HackDevCol/NTD_Taller2.git

# Crear rama para tu feature
git checkout -b feature/nombre-componente

# Hacer cambios y commits
git add .
git commit -m "Añadir componente con descripción detallada"

# Push a tu rama
git push origin feature/nombre-componente

# Crear Pull Request en GitHub
# Resolver conflictos si existen
# Merge a main
```

## 📝 Mensajes de Commit

Usa mensajes descriptivos y en español:

✅ Buenos ejemplos:
- "Añadir componente de biografía con timeline animado"
- "Implementar animaciones de entrada en sección de premios"
- "Optimizar imágenes y mejorar rendimiento general"
- "Corregir responsive en grid de discografía"

❌ Evitar:
- "fix"
- "update"
- "cambios"
- "asdfg"

## 🎯 Checklist del Taller

- [x] Repositorio creado y configurado
- [x] Todos los colaboradores añadidos
- [ ] Cada miembro con mínimo 10 commits significativos
- [ ] Página funcionando correctamente
- [ ] Deployed en GitHub Pages
- [x] README completo
- [ ] Sin errores de ortografía en commits

## 📄 Licencia

Este es un proyecto educativo para el Taller 2 de NTD - Nuevas Tecnologías del Desarrollo.

## 🙏 Créditos

- **Diseño y desarrollo**: Jeisson Palma, Julian Moreno, Gustavo Gallego
- **Información sobre Eminem**: Wikipedia, Billboard, Grammy.com
- **Imágenes**: Uso educativo
- **Universidad**: Fundación Universitaria Konrad Lorenz
- **Materia**: Nuevas Tecnologías del Desarrollo (NTD)
- **Año**: 2026-1

## 🔗 Enlaces

- **Repositorio GitHub**: https://github.com/HackDevCol/NTD_Taller2
- **GitHub Pages**: [Pendiente de deployment]

---

**"Success is my only option, failure's not"** - Eminem, Lose Yourself

---

### 📚 Documentación Adicional

Para más información sobre cómo trabajar con el proyecto, consulta:
- `INSTRUCCIONES.md` - Guía paso a paso para setup y colaboración
- `DOCUMENTO_ENTREGA.md` - Documento oficial de entrega del taller
