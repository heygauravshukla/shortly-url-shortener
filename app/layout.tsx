import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
