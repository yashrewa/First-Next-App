import "./globals.css";
import { Open_Sans } from "next/font/google";
import {SiNextdotjs} from "react-icons/si"

const open_sans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {open_sans.className + " mx-12 text-white bg-black"}>
      <div className="text-4xl flex justify-center text-center p-5 font-semibold"><div><SiNextdotjs /></div><div>EXT <span className="font-extrabold">M</span>OVIES </div></div>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}