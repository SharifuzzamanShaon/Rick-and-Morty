/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // If using app directory (Next.js 13+)
  ],
  theme: {
    extend: {
      fontFamily: {
        ttblack: ["var(--font-tttravels-black)"],

      },
    },
  },
  plugins: [],
};
