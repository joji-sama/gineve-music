import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Gineve Music | Luxury Live Band & Vocal Performance in Abuja",
  description: "Gineve Music delivers refined live music experiences for Abuja’s most elegant corporate events, embassies, and luxury weddings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#0F0F10] text-[#F5F5F3]`}>
        {children}
      </body>
    </html>
  );
}