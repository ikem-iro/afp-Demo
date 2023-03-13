/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      // => @media (min-width: 479px) { ... }
      

      'sm': '1006px',
      // => @media (min-width: 960px) { ... }

      'md': '1269px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1285px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl' : '3072px'

    },
    transitionDuration: {
      '0': '0ms',
      '2500': '2500ms',
    }
  },
  plugins: [],
}
