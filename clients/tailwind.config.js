/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**.{js,ts,jsx,tsx}",
    "./App/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "#f59245",
      }
    },
  },
  plugins: [],
}

