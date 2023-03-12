/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      'md': '1273px',
      // => @media (min-width: 960px) { ... }

      'lg': '1274px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    transitionDuration: {
      '0': '0ms',
      '2500': '2500ms',
    }
  },
  plugins: [],
}
