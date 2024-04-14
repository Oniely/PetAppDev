/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-orange": "#F59245",
        "light-orange": "#FCDBC1",
        "nav-gray": "#7E808F",
        "dark-gray": "#1E1E1E",
        "off-white": "#FAF9F6",
        "orange-white": "#FFF5E9",
      }
    },
  },
  plugins: [],
}

// "main-orange": "#FF8326",