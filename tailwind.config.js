/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js ,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBGColor: "#1b2535",
        mainBG: "#F4F6F6",
        lightBlue: "#4690FF",
        primaryColor: "#FF6B00",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
