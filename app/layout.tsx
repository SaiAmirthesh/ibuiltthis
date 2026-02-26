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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.className} antialiased`}
      >
        <header>Ibuiltthis</header>
        {children}
        <footer>Ibuiltthis Inc. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
