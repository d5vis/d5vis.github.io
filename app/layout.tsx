import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixel = localFont({
  src: "./fonts/Pixel.ttf",
  variable: "--font-pixel",
  weight: "400",
});

export const metadata: Metadata = {
  title: "davis banks",
  description: "davis banks' portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pixel.variable} antialiased max-w-[1440px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
