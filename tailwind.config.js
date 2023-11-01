/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: [" Fira Sans"],
      },
      colors: {
        primary: "#142166",
        secondary: "#F2F2F2",
      },
      textColor:{
        Text: "#142166",
        
      }
    },
  },
  plugins: [],
};
