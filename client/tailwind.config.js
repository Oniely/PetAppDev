/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**.{js,ts,jsx,tsx}",
    "./App/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "main-orange": "#F59245",
        "main-orange": "#FF8326",
        "light-orange": "#FCDBC1",
        "nav-gray": "#7E808F",
        "dark-gray": "#1E1E1E",
        "off-white": "#F1F1F1",
        "orange-white": "#FFF5E9",
      }
    },
  },
  plugins: [],
}

