import type { Metadata } from "next";
import { fonts } from "@/styles/fonts";
import "@/styles/globals.css";

import { cn } from "@/lib/utils"

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