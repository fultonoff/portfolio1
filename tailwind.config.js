/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': '#C778DD',
        'secondary': '#E06B74',
        'tertiary': '#98C379',
        'colorYellow': '#E5C07A',
        'colorBlue': '#62AEEF',
        'colorBlueLight': '#55B6C2',
        'dark': '#282C33',
        'light': '#ABB2BF',
      },

      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}