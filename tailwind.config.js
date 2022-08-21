/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        "primary-light": "#FAFAFB",
        "secondary-light": "#FFFFFF",
        "light-grey": "#F2F2F2",
        "primary-blue": "#2F80ED",
        "primary-green": "#219653",
        "dark-grey": "#828282",
        "medium-grey": "#F6F8FB",
      }
    },
  },
  plugins: [],
}
