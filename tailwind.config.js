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
        icon: 'icon 4s ease-in-out',
        waves: 'wave 3s linear infinite',
        blob2: 'blob2 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: ' translate(30px, -120px) scale(1.2)',
          },
          '66%': {
            transform: ' translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
        },
        blob2: {
          '0%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
          '35%': {
            transform: ' translate(40px, -150px) scale(1.4)',
          },
          '68%': {
            transform: ' translate(-50px, 20px) scale(0.8)',
          },
          '100%': {
            transform: ' translate(0px, 0px) scale(1)',
          },
        },
        icon: {
          '0%': {
            transform: ' scale(1)',
          },
          '33%': {
            transform: '  scale(1.4)',
          },
          '66%': {
            transform: ' scale(0.8)',
          },
          '100%': {
            transform: '  scale(1)',
          },
        },
        wave: {
          '0%': { transform: 'rotate( 0.0deg) ' },
          '10% ': { transform: 'rotate(14.0deg) ' },
          '20% ': { transform: ' rotate(-12.0deg)' },
          ' 30%': { transform: 'rotate(14.0deg)' },
          ' 40%': { transform: 'rotate(-12.0deg) ' },
          ' 50%': { transform: 'rotate(10.0deg) ' },
          ' 60%': { transform: ' rotate( 0.0deg)' },
          '100%': { transform: ' rotate( 0.0deg) ' },
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
