const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: { 11: '2.75rem', 12: '3rem', 13: '3.25rem', 14: '3.5rem' },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Lora', ...fontFamily.serif],
      },
      colors: {
        // Tối giản: chỉ dùng gray/neutral
        primary: colors.gray,
        gray: colors.neutral,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: { color: theme('colors.gray.900'), '&:hover': { color: theme('colors.gray.600') } },
            'h1,h2,h3,h4,h5,h6': { fontFamily: theme('fontFamily.serif').join(', ') },
            code: { color: theme('colors.gray.800') },
          },
        },
        dark: {
          css: {
            a: { color: theme('colors.gray.100'), '&:hover': { color: theme('colors.gray.300') } },
            code: { color: theme('colors.gray.200') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
