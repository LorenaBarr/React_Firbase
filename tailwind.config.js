/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",  // Naranja brillante
        dark: "#121212",     // Fondo oscuro
        light: "#E2E8F0",    // Gris claro
        accent: "#FF8C42",   // Naranja suave
      },
    },
  },
  plugins: [],
};


