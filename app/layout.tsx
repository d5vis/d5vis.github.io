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
  description: "engineer & creative",
  metadataBase: new URL("https://davisjbanks.com"),
  openGraph: {
    type: "website",
    url: "https://davisjbanks.com",
    siteName: "davis banks",
    title: "davis banks",
    description: "engineer & creative",
    images: [
      {
        url: "/images/d5vis.jpg",
      },
    ],
  },
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
