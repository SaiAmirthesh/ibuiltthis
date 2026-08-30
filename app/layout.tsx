import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Amirthesh — Software Engineer Portfolio",
  description: "Computer Science student specializing in backend systems, distributed architectures, Java/Spring Boot, Python, and applied AI.",
};

import SmoothScrolling from "@/components/ui/SmoothScrolling";
import ScrollProgress from "@/components/ui/ScrollProgress";

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
        <ScrollProgress />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
