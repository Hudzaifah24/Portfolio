/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  darkMode: 'class',
  content: [
    "./index"
  ],
  theme: {
    extend: {
      colors: {
        'default': '#92B4EC',
      }
    },
  },
  plugins: [],
}
