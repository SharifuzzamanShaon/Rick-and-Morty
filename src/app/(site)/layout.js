import "../globals.css";
import { ttTravelsLight } from "@/common/helper/font/font";

export const metadata = {
  title: "The Rick & Morty Wiki",
  description: "The Rick & Morty Wiki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/portal.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Rick & Morty Wiki" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
