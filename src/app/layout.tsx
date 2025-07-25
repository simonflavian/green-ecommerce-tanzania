import type { Metadata } from "next";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { AuthProvider } from "@/context/auth-context"; // Import AuthProvider
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenStore - Eco-Friendly Products",
  description: "Your trusted partner for sustainable, eco-friendly products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <AuthProvider> {/* Wrap children with AuthProvider */}
              {children}
            </AuthProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}