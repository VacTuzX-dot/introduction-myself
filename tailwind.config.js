/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00CCFF",
        secondary: "#FFFFFF",
        tertiary: "#DCDCDC",
        quaternary: "#708090",
      },
      fontFamily: {
        afacad: ['Afacad Flux', 'sans-serif'],
      },
    },
  },
  plugins: [],
}