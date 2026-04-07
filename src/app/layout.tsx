import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Illusion Services | Product Design and Engineering Studio",
  description:
    "Illusion Services designs and ships product experiences that launch faster, reduce handoff friction, and scale with clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${manrope.variable} bg-stone-50 font-body text-stone-950 antialiased selection:bg-stone-900 selection:text-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
