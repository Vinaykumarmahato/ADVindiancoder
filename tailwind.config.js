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
      },
      keyframes: {
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