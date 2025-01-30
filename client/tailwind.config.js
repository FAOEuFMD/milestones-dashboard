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
        greyGreen: "#629978"
      }
    },
  },
  plugins: [],
}


/*
048B5D dark green
018877 dark teal
28949C bright blue
38938C lighter teal
629978 grey green 
*/