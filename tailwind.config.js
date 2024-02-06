/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#3E63DD',
      'secondary':'#F0F4FF',
      'white': '#FFFFFF',
      'gray': '#333333',
      'yellow': '#FFB224'
    },
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

