'use client'

import Link from 'next/link'
import { useCart } from '@/context/cart-context'
import { useWishlist } from '@/context/wishlist-context'
import { useAuth } from '@/context/auth-context'
import MobileMenu from './mobile-menu'

export default function Header() {
  const { getTotalItems } = useCart();
  const { getTotalItems: getWishlistItems } = useWishlist();
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div className="container header-container">
        <Link href="/" className="logo">
          GreenStore
        </Link>
        
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
        <div className="header-actions">
          {/* Wishlist Icon */}
          <Link 
            href="/wishlist" 
            className="header-icon-link"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="desktop-nav-text">
              Wishlist
            </span>
            {getWishlistItems() > 0 && (
              <span className="badge header-badge">
                {getWishlistItems()}
              </span>
            )}
          </Link>

          {/* Cart Button */}
          <Link 
            href="/cart" 
            className="btn btn-primary header-cart-btn" 
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="desktop-nav-text">Cart</span>
            {getTotalItems() > 0 && (
              <span className="badge cart-badge">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* Login/Account Link */}
          {isLoggedIn ? (
            <Link 
              href="/account/dashboard" 
              className="header-icon-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="desktop-nav-text">
                My Account
              </span>
            </Link>
          ) : (
            <Link 
              href="/login" 
              className="header-icon-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
              <span className="desktop-nav-text">
                Login
              </span>
            </Link>
          )}
          
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}