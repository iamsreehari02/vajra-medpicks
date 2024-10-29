/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js ,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBGColor: "#1b2535",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
