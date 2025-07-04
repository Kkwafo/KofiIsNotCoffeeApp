import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ], })

export const metadata: Metadata = {
  title: "KofiIsNotCoffeeApp",
  description: "KofiIsNotCoffeeApp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-orange-50`}
      >
        {children}
      </body>
    </html>
  );
}
