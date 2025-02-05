/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#048B5D",
        darkTeal: "#018877",
        brightBlue: "#28949C",
        lighterTeal: "#38938C",
        greyGreen: "#629978",
        darkRed: "#af4343"
      }
    },
  },
  plugins: [],
}