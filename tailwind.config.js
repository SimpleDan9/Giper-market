/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        sm:"576px",
        md:"768px",
        lg:"992px"
      },
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

