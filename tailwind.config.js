/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#FAFAFB',
        'neutral-100': '#F2F2F2',
        'neutral-900': '#4F4F4F',
        'neutral-800': '#828282',
        'neutral-700': '#BDBDBD',

        'blue-50': '#F6F8FB',
        'blue-300': '#97BEF4',
        'blue-500': '#2F80ED',
      },
      boxShadow: {
        main: '0px 4px 12px 0px #0000001A',
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      maxWidth: {
        md: '25.125rem',
      },
      height: {
        10.5: '2.625rem',
        12.5: '3.125rem',
      },
      letterSpacing: {
        tight: '-0.035em',
      },
      transformOrigin: {
        'left-right': '0% 50%',
      },
      animation: {
        progress: 'progress 1s infinite linear',
      },
      keyframes: {
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.3)' },
          '100%': { transform: 'translateX(100%) scaleX(0.3)' },
        },
      },
    },
    fontFamily: {
      sans: '"Poppins", sans-serif',
    },
  },
  plugins: [],
}
