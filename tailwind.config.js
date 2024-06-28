/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'sm': '680px'
    },
    extend: {
      colors:{
        //Classic
        classicwhite:"#FFFFFF",
        classicblack:"#000000",
        forestGreen:"#228B22",
        classicGray:"#D3D3D3",
        //Paleta Naturaleza
        naturalGreen:"#6B8E23",
        naturalGreenHover:"#88BA30",
        naturalBeige:"#F5F5DC",
        naturalMarron:"#8B4513",
        creamWhite:"#FFFDD0",
        //Paleta Moderna-Minimalista
        darkGray:"#333333",
        mintGreen:"#98FF98",
        skyBlue:"#87CEEB",
        //Paleta Infantil
        snowWhite:"#FFFAFA",
        gentleBlack:"#2F4F4F",
        pastelGreen:"#77DD77",
        pastelRose:"#FFB6C1"
      }    
    },
  },
  plugins: [
    
  ],
}

