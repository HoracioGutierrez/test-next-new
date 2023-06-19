/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors')
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          DEFAULT: '#030303',
          20: '#18181C',
        },
        light: {
          DEFAULT: '#FFFFFF',
          20: 'rgba(255, 255, 255 , 0.2)',
        },
        accent: {
          DEFAULT: '#007EFF',
          20: 'rgba(0, 126, 255 , 0.2)',
          7: 'rgba(0, 126, 255 , 0.07)',
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}
