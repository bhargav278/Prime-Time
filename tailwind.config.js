/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backImage': "url('/src/assets/strangerThings.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ]
}