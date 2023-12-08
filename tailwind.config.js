/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:"#7467B2",
        primaryContent:"#f0ece9",
        primarySubcontent:"#F3EFE0",
        primaryBase:"#a2acab",
        primaryAccent:"#5c5e5d",
        primaryBg:"#363636",
      }
    },
  },
  plugins: [],
}

