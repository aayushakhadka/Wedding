/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobileS': '320px',
      'mobileM': '375px',
      'mobileL': '425px',
       'tablet':'768px',
       'laptop1':'1024px',
      'laptop': '1440px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage:{
        'bg':"url('./images/bg.jpg')",
        'image': "url('./images/image.jpg')",
        'groom':"url('./images/groom.jpg')",
        'bride':"url('./images/bride.jpg')",
        'bird':"url('./images/bird.png')",
        'couple':"url('./images/couple.jpg')",
        'wedding':"url('./images/wedding-couple.jpg')",
        'marraige':"url('./images/marraige.jpg')",
        'newlyweds':"url('./images/newlyweds.jpg')"
      },
      fontFamily:{
        'custom':['customFont','cursive']
      }
    },
  },
  plugins: [],
}

