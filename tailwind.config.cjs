/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gsb-blue': '#4A90E2',
        'gsb-dark': '#2C3E50',
      },
    },
  },
  plugins: [],
} 