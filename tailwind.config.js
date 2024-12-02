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
      animation: {
        float: 'float 2s ease-in-out infinite', // Custom animation name with duration and infinite loop
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(50%)' }, // Start and end positions
          '50%': { transform: 'translateY(-10px) translateX(50%)' }, // Midway position
        },
      },
    },
  },
  plugins: [
    primeui,
    function ({ addUtilities }) {
      const newUtilities = {
        '.delay-0': { animationDelay: '0s' },
        '.delay-1': { animationDelay: '1s' },
        '.delay-2': { animationDelay: '2s' },
        '.delay-3': { animationDelay: '3s' },
        '.delay-4': { animationDelay: '4s' },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ]
}

