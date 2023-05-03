/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#7FD1CC',
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
        purple: {
          50: '#9694F5',
          100: '#8381D9',
          200: '#2A2879',
        },
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },
      gridTemplateColumns: {
        minMax: 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
