/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./contexts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#0078FF',
                secondary: '#FFC107',
                'dark-bg': '#0B1120',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'shadow-glow-primary': 'shadow-glow-primary 1.5s ease-in-out infinite alternate',
                'shadow-glow-secondary': 'shadow-glow-secondary 1.5s ease-in-out infinite alternate',
                'gradient-bg': 'gradient-bg 15s ease infinite',
                'dynamic-glow': 'dynamicGlow 4s ease-in-out infinite',
            },
            keyframes: {
                dynamicGlow: {
                    '0%': {
                        boxShadow: '0 0 20px #0078FF, 0 0 40px #0078FF',
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
                        boxShadow: '0 0 20px #0078FF, 0 0 40px #0078FF',
                        filter: 'hue-rotate(360deg)',
                    }
                },
                'shadow-glow-primary': {
                    '0%': { 'box-shadow': '0 0 5px #0078FF, 0 0 10px #0078FF' },
                    '100%': { 'box-shadow': '0 0 20px #0078FF, 0 0 30px #0078FF' },
                },
                'shadow-glow-secondary': {
                    '0%': { 'box-shadow': '0 0 5px #FFC107, 0 0 10px #FFC107' },
                    '100%': { 'box-shadow': '0 0 20px #FFC107, 0 0 30px #FFC107' },
                },
                'gradient-bg': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
