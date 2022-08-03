/** @type {import('tailwindcss').Config} */
// const { fontFamily } = require('@tailwindcss/typography/src/styles');

module.exports = {
  darkMode: "class" /* 'media', 'class' or false  */,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tailwind-scrollbar-hide/src/index.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gill Sans", "Inter var", "Roboto", "Poppins", "sans-serif"],
        serif: ["Adobe caslon Pro", "Playfair Display", "serif"],
        bloc: ["Portico", "Impact", "sans-serif"],
      },
      colors: {
        // primary: "#222527",
        primary: "rgb(34, 37, 39) / <alpha-value>",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        grey: "rgb(128, 128, 128) / <alpha-value>",
        lightgrey: "rgb(229, 229, 229) / <alpha-value>",
        brand: "rgb(var(--brand-color) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-scrollbar"),
    require("tailwindcss-textshadow"),
    require("tw-elements/dist/plugin"),
  ],
};

// module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [require('tw-elements/dist/plugin')],
// };
