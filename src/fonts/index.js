import localFont from "next/font/local";

const tttravels = localFont({
  src: [
    {
      path: "./TTTravels-Black.ttf",
      variable: "--font-tttravels-black"
    },
    {
      path: "./TTTravels-Regular.ttf",
      variable: "--font-tttravels-regular"
    },
    {
      path: "./TTTravels-Bold.ttf",
      variable: "--font-tttravels-bold"
    },
    {
      path: "./TTTravels-Medium.ttf",
      variable: "--font-tttravels-medium"
    }
  ],
});


export { tttravels };