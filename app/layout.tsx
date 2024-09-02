import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VOL",
  description: "Generated by create next app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="w-1/12 border-r text-white bg-gray-700 border-gray-900">
            <Navbar />
          </div>
          <div className="w-11/12 gradient-background">{children}</div>
        </div>
      </body>
    </html >
  );
}
