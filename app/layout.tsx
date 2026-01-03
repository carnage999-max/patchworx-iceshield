import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patchworx IceShield® | Salt-Free Winter Road Safety System",
  description: "Advanced anti-adhesion and engineered traction for winter road safety without salt. IceShield® prevents ice bonding, reduces accidents, and protects infrastructure.",
  keywords: ["winter roads", "road safety", "ice treatment", "pavement protection", "salt-free de-icing", "winter maintenance"],
  metadataBase: new URL("https://patchworx-ice.com"),
  alternates: {
    canonical: "https://patchworx-ice.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://patchworx-ice.com",
    title: "Patchworx IceShield® | Salt-Free Winter Road Safety System",
    description: "Advanced anti-adhesion and engineered traction for winter road safety without salt. IceShield® prevents ice bonding, reduces accidents, and protects infrastructure.",
    images: [
      {
        url: "https://patchworx-ice.com/patchworx-ice-logo.png",
        width: 1200,
        height: 630,
        alt: "Patchworx IceShield Logo",
      },
    ],
    siteName: "Patchworx IceShield",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patchworx IceShield® | Salt-Free Winter Road Safety System",
    description: "Advanced anti-adhesion and engineered traction for winter road safety without salt.",
    images: ["https://patchworx-ice.com/patchworx-ice-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  authors: [{ name: "Patchworx Inc" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
