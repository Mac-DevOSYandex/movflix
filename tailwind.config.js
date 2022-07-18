/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class' /* 'media', 'class' or false  */,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tailwind-scrollbar-hide/src/index.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gill Sans', 'Inter var', 'Roboto', 'Poppins', 'sans-serif'],
        serif: ['Adobe caslon Pro', 'Playfair Display', 'serif'],
        bloc: ['Portico', 'Impact', 'sans-serif'],
      },
      color: {
        brand: 'rgb(var(--brand-color) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-scrollbar'),
    require('tailwindcss-textshadow'),
    require('tw-elements/dist/plugin'),
  ],
};
