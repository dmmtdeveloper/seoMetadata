import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateMetadataCustom } from "@/metadata";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = () => generateMetadataCustom();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
