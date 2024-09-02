/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'neutral-50': '#F9FAFB',
        'neutral-100': '#E5E7EB',
        'neutral-700': '#4D5562',
        'neutral-800': '#212936',
        'neutral-950': '#121826',

        'blue-100': '#C2DAF9',
        'blue-300': '#9DC4F8',
        'blue-500': '#3662E3',
      },
      boxShadow: {
        main: '0px 4px 12px 0px #0000001A',
      },
      height: {
        18: '4.5rem',
      },
      maxWidth: {
        lg: '30rem',
        xl: '33.75rem',
      },
      padding: {
        18: '4.5rem',
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
          '40%': { transform: 'translateX(0) scaleX(0.1625)' },
          '100%': { transform: 'translateX(100%) scaleX(0.1625)' },
        },
      },
    },
    fontFamily: {
      sans: '"Inter", sans-serif',
    },
  },
  plugins: [],
}
