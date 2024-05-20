import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './components/BootstrapClient.js';

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Studio",
  description: "Mrs. Sampica's Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
