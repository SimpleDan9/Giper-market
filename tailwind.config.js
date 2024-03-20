/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        input:"#857372"
      },
      fontFamily:{
        jost:["Jost"," sans-serif"]
      },
      container:{
        center:true,
        padding:"20px",
        screens:{
          lg:"1440px"
        }
      }
    },
  },
  plugins: [],
}

