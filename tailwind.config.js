/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      principal: "#043873",
      white: "#ffffff",
      buttonTry: "#4F9CF9",
      buttonLogin: "#FFE492",
    },
    extend: {
      fontFamily: {
        myFont: ["myFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
