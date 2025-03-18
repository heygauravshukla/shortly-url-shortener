// External dependencies
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Local components and providers
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Styles
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shortly - URL Shortener",
  description:
    "A URL shortener web application that quickly shortens long URLs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
