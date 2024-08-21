/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      height :{
        '94' : '22rem'
      },
      width : {
        'max-w-8xl' : '82.5rem'
      }
    },
  },
  plugins: [],
}

