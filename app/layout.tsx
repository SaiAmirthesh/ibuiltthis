import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibuiltthis",
  description: "ibuilthis is a platform for building and sharing projects with the world.",
};

import SmoothScrolling from "@/components/ui/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${InterFont.className} antialiased bg-[#050505] text-white/90 selection:bg-primary/30 selection:text-white min-h-screen`}
        >
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </body>
      </html>
    </ClerkProvider>
  );
}
