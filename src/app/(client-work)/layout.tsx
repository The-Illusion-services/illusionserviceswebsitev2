import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Uwakstar Designs",
  description: "Handcrafted African-print clutches, crossbody bags, and fabric-wrapped earrings.",
  robots: { index: false, follow: false },
};

export default function ClientWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${cormorant.variable} ${inter.variable} bg-[#FFFCF7] text-[#24211D] antialiased`}>
        {children}
      </body>
    </html>
  );
}
