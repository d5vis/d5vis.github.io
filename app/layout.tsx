import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
