/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        green: '#2CBE4E',
        purple: '#C1B1FF',
        black: '#000000',
        white: '#ffffff',
        back: {
          bg: '#131315',
        },
        line: {
          1: '#373944',
          2: '#D9D9D9',
        },
        text: {
          1: '#8D909C',
          2: '#C4C5CB',
        },
        point: {
          1: '#1E2026',
          2: '#3861FB',
          3: '#6081FC',
        },
      },
      boxShadow: {
        black: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
        red: '0px 4px 16px 0px rgba(224, 174, 174, 0.25)',
      },
      fontSize: {},
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      borderRadius: {},
      spacing: {
        rem: '1rem',
      },
    },
  },
  plugins: [require('tailwindcss'),require('@tailwindcss/forms'), require('autoprefixer')],
}

