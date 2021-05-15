const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.yellow,
        yellow: {
          light: '#f8eb69',
          DEFAULT: '#FAD118',
          dark: '#e1b900',
        },
      },
    },
  },
}
