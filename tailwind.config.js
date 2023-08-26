/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '10vw': '10vw',
        '20vw': '20vw',
      },

      spacing: {
        '20p' : '20%',
      },
      screens: {
        'sm2': '600px',
        'pc': '1000px',
        'pcXl': '1400px',
      },

      width: {
        '45vw': '45vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '14vw': '14vw',
        '50vw': '50vw',
        '70vw': '70vw',
      },

      height: {
        '20vw': '20vw',
        '30vw': '30vw',
        '38vw': '38vw',
        '45vw': '55vw',
      },
    },
    plugins: [],
    }
}
