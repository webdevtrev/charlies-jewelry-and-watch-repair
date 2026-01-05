import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Charlie's Jewelry and Watch Repair",
  description: "Expert jewelry and watch repair services in Dayton. Quality craftsmanship you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
