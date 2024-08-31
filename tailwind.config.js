/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#243cff",
        "azul-oscuro": "#0d1b3e"
      },
      spacing: {
        "42": "170px"
      },
      screens: {
        'tablet': "900px"
      }
    },
  },
  plugins: [],
}

