/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // your main HTML
    "./src/**/*.{js,jsx,ts,tsx}"  // all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3d4eea',
        grey: '#f4f7fe',
      },
    },
  },
  plugins: [],
}
