/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'onest': "Onest, sans-serif"
      },
    },
  },
  plugins: [
    primeui
  ]
}

