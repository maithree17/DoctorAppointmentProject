/** @type {import('tailwindcss').Config} */
export default  {
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
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}
