import { Lexend, Lexend_Giga, Lexend_Deca, Inter } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const lexend_giga = Lexend_Giga({ subsets: ["latin"], variable: "--font-lexend-giga" });
const lexend_decagram = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend-decagram" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const fonts = { inter, lexend, lexend_giga, lexend_decagram };