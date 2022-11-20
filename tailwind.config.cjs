/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Marhey: ['"marhey, cursive"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
