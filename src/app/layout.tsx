import type { Metadata, Viewport } from "next";
import { fonts } from "@/styles/fonts";
import "@/styles/globals.css";

import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://theshadcommerce.vercel.app"),
  title: "Shadcommerce",
  description: "A modern e-commerce platform built with Next.js and Shadcn",
  openGraph: {
    title: "Shadcommerce",
    description: "A modern e-commerce platform built with Next.js and Shadcn.",
    type: "website",
    locale: "en_US",
    url: new URL("/", "https://theshadcommerce.vercel.app"),
    images: [
      {
        url: "https://theshadcommerce.vercel.app/og-image.png",
        width: 1365,
        height: 767,
        alt: "Shadcommerce large card image",
      }
    ]
  },
  twitter: {
    creator: "@Shadcommerce",
    site: "@Shadcommerce",
    card: "summary_large_image",
    images: [
      {
        url: "https://theshadcommerce.vercel.app/og-image.png",
        alt: "Shadcommerce large card image",
      }
    ]
  },
};

export const viewport: Viewport = {
  themeColor: '#e1dfe6', // Theme color for the website
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background antialiased",
          fonts.inter.variable, 
          fonts.lexend.variable,
          fonts.lexend_giga.variable,
          fonts.lexend_decagram.variable,
        )}>
        {children}
      </body>
    </html>
  );
}