/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //here you can put yo colors, down u have 2 examples

        gris: "#515151",
        verde1: "#b2e44a",
        verde2: "#429324",
        
        
      },
      fontFamily: {
        splinesans: ['Spline Sans', 'sans-serif'],
        splinesansmono: ['Spline Sans Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

