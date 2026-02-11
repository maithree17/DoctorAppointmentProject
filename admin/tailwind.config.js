/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // your main HTML
    "./src/**/*.{js,jsx,ts,tsx}"  // all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#7781e1"
      }
    },
  },
  plugins: [],
}
