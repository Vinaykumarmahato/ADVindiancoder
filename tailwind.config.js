/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#FBBF24',
        'dark-bg': '#0F172A',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'shadow-glow-primary': 'glow 2s ease-in-out infinite',
        'shadow-glow-secondary': 'glow 2s ease-in-out infinite',
        'gradient-bg': 'gradient 15s ease infinite',
        'dynamic-glow': 'dynamicGlow 4s ease-in-out infinite',
      },
      keyframes: {
        dynamicGlow: {
          '0%': {
            boxShadow: '0 0 20px #3B82F6, 0 0 40px #3B82F6',
            filter: 'hue-rotate(0deg)',
          },
          '33%': {
            boxShadow: '0 0 25px #8B5CF6, 0 0 50px #8B5CF6',
            filter: 'hue-rotate(120deg)',
          },
          '66%': {
            boxShadow: '0 0 30px #EC4899, 0 0 60px #EC4899',
            filter: 'hue-rotate(240deg)',
          },
          '100%': {
            boxShadow: '0 0 20px #3B82F6, 0 0 40px #3B82F6',
            filter: 'hue-rotate(360deg)',
          }
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px var(--tw-shadow-color)',
          },
          '50%': {
            boxShadow: '0 0 10px var(--tw-shadow-color)',
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}