import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Charlie's Jewelry and Watch Repair",
  title: "Charlie's Jewelry and Watch Repair",
  description:
    "Expert jewelry and watch repair services in Dayton. Quality craftsmanship you can trust.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: "Charlie's Jewelry and Watch Repair",
  },
  openGraph: {
    title: "Charlie's Jewelry and Watch Repair",
    description:
      "Expert jewelry and watch repair services in Dayton. Quality craftsmanship you can trust.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Charlie's Jewelry and Watch Repair logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie's Jewelry and Watch Repair",
    description:
      "Expert jewelry and watch repair services in Dayton. Quality craftsmanship you can trust.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable}`}>{children}</body>
    </html>
  );
}
