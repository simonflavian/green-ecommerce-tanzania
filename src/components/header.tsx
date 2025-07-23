'use client'

import Link from 'next/link'
import { useCart } from '@/context/cart-context'
import MobileMenu from './mobile-menu'

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header style={{
      backgroundColor: 'var(--white)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderBottom: '1px solid var(--gray-200)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        <Link href="/" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'var(--primary-700)',
          textDecoration: 'none'
        }} className="logo">
          GreenStore
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{display: 'flex', gap: '32px'}}>
          <Link href="/" style={{color: 'var(--gray-700)', textDecoration: 'none'}}>Home</Link>
          <Link href="/products" style={{color: 'var(--gray-700)', textDecoration: 'none'}}>Products</Link>
          <Link href="/about" style={{color: 'var(--gray-700)', textDecoration: 'none'}}>About</Link>
        </nav>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <Link href="/cart" className="btn btn-primary" style={{textDecoration: 'none'}}>
            Cart ({getTotalItems()})
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}