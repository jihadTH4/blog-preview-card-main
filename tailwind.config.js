/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "src./**/*.{html,js,jsx,ts,tsx,css,scss,sass}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "hsl(47, 88%, 63%)",
        "white": "hsl(0, 0%, 100%)",
        "gray-500": "hsl(0, 0%, 42%)",
        "gray-950": "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
}

