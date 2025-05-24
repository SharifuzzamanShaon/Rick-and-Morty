// tailwind.config.js


module.exports = {
    // tailwind.config.js

  theme: {
    extend: {
      fontFamily: {
        ttblack: ['TTTravelsBlack', 'sans-serif'],
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // include other folders if needed
  ],


  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // If using app directory (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}

