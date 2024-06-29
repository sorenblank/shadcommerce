import type { Metadata } from "next";
import { fonts } from "@/styles/fonts";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Shadcommerce",
  description: "A modern e-commerce platform built with Next.js and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
          ${fonts.lexend.variable} 
          ${fonts.lexend_giga.variable} 
          ${fonts.lexend_decagram.variable} 
          ${fonts.inter.variable}
        `}>
        {children}
      </body>
    </html>
  );
}