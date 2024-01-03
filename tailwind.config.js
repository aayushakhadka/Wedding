/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobileS:{max:'320px'},
      mobileM: {max:'700px'},
      mobileL: "425px",
      tablet: "768px",
      laptop1: "1024px",
      laptop: "1440px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        bg: "url('./images/bg.jpg')",
        image: "url('./images/image.jpg')",
        groom: "url('./images/groom.jpg')",
        bride: "url('./images/bride.jpg')",
        bird: "url('./images/bird.png')",
        couple: "url('./images/couple.jpg')",
        wedding: "url('./images/wedding.jpg')",
        newlyweds: "url('./images/newlyweds.jpg')",
        marriage:"url('./images/marriage.jpg')",
        photo:"url('./images/photo.jpeg')"
      },
      fontFamily: {
        custom: ["customFont", "cursive"],
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
