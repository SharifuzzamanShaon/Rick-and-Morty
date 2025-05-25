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
        ttregular: ["var(--font-tttravels-regular)"],
        ttbold: ["var(--font-tttravels-bold)"],
        ttmedium: ["var(--font-tttravels-medium)"],
        ttlight: ["var(--font-tttravels-light)"],
        ttextrabold: ["var(--font-tttravels-extrabold)"],
        ttsemibold: ["var(--font-tttravels-semibold)"],
        ttthin: ["var(--font-tttravels-thin)"],
        ttextralight: ["var(--font-tttravels-extralight)"],

      },
    },
  },
  plugins: [],
};
