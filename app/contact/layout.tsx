import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charlie's Jewelry and Watch Repair",
  description:
    "Expert jewelry and watch repair services in Dayton. Quality craftsmanship you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
