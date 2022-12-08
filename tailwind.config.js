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
        Nunito: ['Nunito Sans', 'sans-serif'],
        Open: ['Open Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Varela: ['Varela Round', 'sans-serif'],
        Baloo: ['Baloo 2', 'cursive'],
      },
    },
  },
  plugins: [],
};
