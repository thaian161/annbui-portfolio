/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //doing darkMode base on class
  content: [
    './pages/**/*.{js,ts.jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
