/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color':'#ABEF5F',
            'secondary-color': '#212121'
          },
            backgroundImage:{
            'discuss-bg': "url('./assets/bg.jpg'')",
          },
            fontFamily: {
            'manrope': "Manrope, sans-serif",
          }
      },
    },
    plugins: [],
  }