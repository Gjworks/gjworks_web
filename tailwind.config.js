/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: colors.red,
      secondary: colors.purple,
      gray: colors.slate,
      gray2: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      zinc: colors.zinc,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      // 'dark' : colors.zinc,
      'dark': {
        0: '#d5dce9',
        50: '#b6bfd2',
        100: '#9ba6be',
        200: '#828b9d',
        300: '#677082',
        400: '#3d424d',
        500: '#282d36',
        600: '#1e2026',
        700: '#1b1d21',
        800: '#17181c',
        900: '#131419'
      }
    }
  },
  plugins: [],
}
