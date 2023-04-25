/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#015376',
        'secondary':'#0380B699',
        'dark':'#0B0D26'
      }
    },
  },
  plugins: [],
}

