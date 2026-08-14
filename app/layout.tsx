import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwini — Data Scientist × AI",
  description: "Building with data, models & intelligence.",
};

import { TransitionOverlayProvider } from "@/components/TransitionOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionOverlayProvider>{children}</TransitionOverlayProvider>
      </body>
    </html>
  );
}
