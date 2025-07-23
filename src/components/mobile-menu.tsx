'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        style={{
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px'
        }}
        className="mobile-menu-btn"
      >
        <span style={{
          width: '20px',
          height: '2px',
          backgroundColor: 'var(--primary-700)',
          marginBottom: '3px',
          transition: 'all 0.3s',
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
        }}></span>
        <span style={{
          width: '20px',
          height: '2px',
          backgroundColor: 'var(--primary-700)',
          marginBottom: '3px',
          transition: 'all 0.3s',
          opacity: isOpen ? '0' : '1'
        }}></span>
        <span style={{
          width: '20px',
          height: '2px',
          backgroundColor: 'var(--primary-700)',
          transition: 'all 0.3s',
          transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
        }}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: '999'
        }} onClick={toggleMenu}>
          <div style={{
            backgroundColor: 'var(--white)',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }} onClick={(e) => e.stopPropagation()}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <Link 
                href="/" 
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--gray-200)',
                  fontSize: '18px'
                }}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--gray-200)',
                  fontSize: '18px'
                }}
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--gray-200)',
                  fontSize: '18px'
                }}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '18px'
                }}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}