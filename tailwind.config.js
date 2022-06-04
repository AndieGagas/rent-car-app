module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        darkblue: {
          50  : '#F1F3FF',
          100 : '#CFD4ED',
          400 : '#0D28A6',
          500 : '#091B6F'
        },
        limegreen: {
          200 : '#C9E7CA',
          400 : '#5CB85F',
          500 : '#3D7B3F'
        },
        netral: {
          200 : '#D0D0D0',
          300 : '#8A8A8A'
        }
      },

      spacing: {
        '18'  : '4.5rem',
        '26'  : '6.375rem',
        '34'  : '8.625rem',
        '114' : '28.5rem'
      }
    },
  },
  plugins: [],
}
