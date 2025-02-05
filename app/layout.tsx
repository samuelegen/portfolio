import type { Metadata } from "next";
import { Geist, Prata, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Molecoles/Navbar";

const prata_font = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato_font = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Samuele Gennaro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${lato_font.variable} ${prata_font.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
