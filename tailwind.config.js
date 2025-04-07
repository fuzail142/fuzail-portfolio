// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa'
        },
        secondary: {
          light: '#7c3aed',
          dark: '#8b5cf6'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' }
        }
      }
    },
  },
  plugins: [],
}