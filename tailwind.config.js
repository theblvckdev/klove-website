/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: ["#000000"],
        secondary: ["#0c0e13"],
        primary: ["#3067ff"],
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
