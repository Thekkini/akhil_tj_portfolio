module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        montserratblack: "'Montserrat-Black', sans-serif",
      },
      colors: {
        myLight: '#FAF9F0',
        myBlue: '#000249',
        myRed: '#F6490D',
        myRedLight: 'rgba(246,73,13,0.54)',
        myRedVeryLight: 'rgba(246, 73, 13, 0.1)',
        myBeige: '#E8D6D0',
      },
    },
  },
  plugins: [],
};
