/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bkr': "url('/src/assets/images/bkr.png')",
        'bkpage': "url('/src/assets/images/bkpage.png')",
        'bakery': "url('/src/assets/images/bakery.png')",
        
      }
    },
  },
  plugins: [],
}