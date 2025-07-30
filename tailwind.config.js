/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brightrose": "#D92C54"
      },
      fontFamily:{
        'Roboto':"Roboto, sans-serif"
      }
    },
  },
  plugins: [],
}

