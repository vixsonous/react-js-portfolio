/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite'
      },
      keyframes: {
        'spin' : {
          from: { transform: 'scale(1) rotate(0deg)' },
          to: { transform: 'scale(1) rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}

