import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "#F59245",
        "light-orange": "#FCDBC1",
        "low-orange": "#f8b683",
        "nav-gray": "#7E808F",
        "low-gray": "#7c7d82",
        "dark-gray": "#1E1E1E",
        "off-white": "#FAF9F6",
        "orange-white": "#FFF5E9",
      }
    },
  },
  plugins: [],
};
export default config;
