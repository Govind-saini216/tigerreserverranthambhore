/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primercolor: "#C25107",
        secondrycolor: "#8F2502",
        terhrycolor: "#FFFFFF",
        lightgray:"#C1C0C0",
        bgblack:"#0B192C",
        lightred:"#FFC0CB",
        gradiantfirst:"#141e30",
        gradiantsecond:"#243b55"
      },
      fontFamily:{
        Merriweather: "Merriweather",
        Merriweatherblack: "merriweather-black"
      }
    },

    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      ml:'420px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

