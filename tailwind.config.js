const { keyframes } = require('tailwindcss');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fade: 'fade 1s ease-in forwards',
        'fade-right': 'fadeRight 1s ease-in forwards',
        'fade-up': 'fadeUp 1s ease-in forwards',
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

