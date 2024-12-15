import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import "./globals.css";

import { Lato } from 'next/font/google'

const inter = Lato({
  subsets:['latin'],
  display:'swap',
  weight:'400'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortMaster",
  description: "Shorten URLs with ease and save them for later",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
      <div className="flex h-100vh">
          <Sidebar/>
          <div className="w-full">
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
