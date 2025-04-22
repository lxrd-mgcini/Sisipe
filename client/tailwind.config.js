/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Replace 'CustomFont' with the name of your custom font
      },
      colors: {
        'primary': '#e8d1af80',
        'secondary': '#03666766',
        'tertiary': '#d9d9d99e',

        'background': '#e8d1af3d',
        'black': '#4a463f',
        'black75': '#504D4A',
        'black50': '#77736E',
      },
    },
  },
  plugins: [],
}

