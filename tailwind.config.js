/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xm': '480px', // Custom screen size named 'xm'
      },
    },
  },
  plugins: [],
}