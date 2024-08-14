import type { Metadata } from "next";

import "./styles/custom-bootstrap.css";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Shappening LLC",
  description:
    "Shappening Art is a small Florida-based mixed media art business. We welcome all gift-givers and trinket lovers. From unique handmade customizable pieces to ready-made designs, we have something for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body>{children}</body>
      </CartProvider>
    </html>
  );
}
