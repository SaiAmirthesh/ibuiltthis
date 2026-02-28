import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibuiltthis",
  description: "ibuilthis is a platform for building and sharing projects with the world.",
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${InterFont.className} antialiased bg-[#050505] text-white/90 selection:bg-primary/30 selection:text-white min-h-screen`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
