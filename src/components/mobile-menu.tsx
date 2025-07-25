"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"
import { useAuth } from "@/context/auth-context"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { getTotalItems } = useCart()
  const { getTotalItems: getWishlistItems } = useWishlist()
  const { isLoggedIn } = useAuth()

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
        ☰
      </button>

      {isOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={closeMenu} />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button onClick={closeMenu} className="mobile-menu-close-btn">
                ×
              </button>
            </div>

            <nav className="mobile-nav-links">
              <Link href="/" onClick={closeMenu} className="mobile-nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
                Home
              </Link>

              <Link href="/products" onClick={closeMenu} className="mobile-nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Products
              </Link>

              <Link href="/about" onClick={closeMenu} className="mobile-nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                About
              </Link>

              <Link href="/contact" onClick={closeMenu} className="mobile-nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact
              </Link>
            </nav>

            <div className="mobile-menu-utility-links">
              {isLoggedIn ? (
                <Link href="/account/dashboard" onClick={closeMenu} className="mobile-menu-account-link">
                  <div className="mobile-menu-link-content">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    My Account
                  </div>
                </Link>
              ) : (
                <Link href="/login" onClick={closeMenu} className="mobile-menu-account-link">
                  <div className="mobile-menu-link-content">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" x2="3" y1="12" y2="12" />
                    </svg>
                    Login / Register
                  </div>
                </Link>
              )}

              <Link href="/wishlist" onClick={closeMenu} className="mobile-menu-wishlist-link">
                <div className="mobile-menu-link-content">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Wishlist
                </div>
                {getWishlistItems() > 0 && <span className="badge mobile-menu-badge">{getWishlistItems()}</span>}
              </Link>

              <Link href="/cart" onClick={closeMenu} className="mobile-menu-cart-link">
                <div className="mobile-menu-link-content">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  Shopping Cart
                </div>
                {getTotalItems() > 0 && <span className="badge mobile-menu-badge">{getTotalItems()}</span>}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
