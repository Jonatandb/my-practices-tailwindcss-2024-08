# Curso de Tailwind CSS

La idea de este proyecto es utilizarlo para practicar TailwindCSS a medida que sigo el video curso siguiente:

 - https://www.youtube.com/watch?v=5HtRcMSO1Ro

---

## Creación de este proyecto

Inicialicé el proyecto desde cero utilizando Vite ejecutando:

`
npm create vite@latest
`

Cree un proyecto vanilla javascript y limpié el código de ejemplo inicial:
 - Eliminé archivos .js
 - Renombré y vinculé a index.html el archivo styles.css

## Instalación de TailwindCSS

Luego instalé Tailwindcss según indica la guía oficial (para Vite):
 - https://tailwindcss.com/docs/guides/vite

    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

Por último actualicé los archivos siguientes:

  - En `tailwind.config.js` en la sección `content` agregué lo siguiente:

    - `"./index.html",`
    - `"./src/**/*.{js,ts,jsx,tsx}",`

  - En `index.css` agregué lo siguiente al inicio:

    `@tailwind base;`

    `@tailwind components;`

    `@tailwind utilities;`

  A partir de este momento, cualquier clase de TailwindCSS agregada a un elemento será interpretada y utilizada por Tailwind y se verá reflejada instantaneamente.
## Ejecución del proyecto

  `npm run dev`