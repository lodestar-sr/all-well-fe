/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      boxShadow: {
        card: '0px -3px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);',
        cardSmall:
          '0px -3px 10px rgba(0, 0, 0, 0.14), 0px 5px 5px rgba(0, 0, 0, 0.2);'
      },
      colors: {
        surface: {
          light: '#353C42'
        },
        primary: {
          DEFAULT: '#006EFF',
          hover: '#254A5390'
        },
        success: {
          DEFAULT: '#4EE0BC',
          hover: '#4EE0BC90'
        },
        danger: {
          DEFAULT: '#E0574E',
          hover: '#8c332f'
        },
        grey: {
          DEFAULT: '#9D9D9D',
          superlight: '#E6E6E6'
        },
        blue: {
          DEFAULT: '#006EFF',
          bluewood: '#2C3E50'
        }
      }
    }
  },
  important: '#tailwind-root',
  plugins: [require('@tailwindcss/line-clamp')]
};
