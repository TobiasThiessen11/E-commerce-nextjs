import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {CartProvider } from "./context";
import HeaderLogin from "./ui/HeaderLogin";

const inter = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Merch",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { return (
  <html lang="en">
    <body className={inter.className}>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
        <Footer />
      </div>
    </body>
  </html>
);
};