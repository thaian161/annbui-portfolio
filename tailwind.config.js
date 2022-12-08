/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //doing darkMode base on class
  content: [
    './pages/**/*.{js,ts.jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: ' translate(30px, -80px) scale(1.1)',
          },
          '66%': {
            transform: ' translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
        },
      },
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
