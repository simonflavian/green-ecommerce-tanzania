import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-800)',
      color: 'var(--white)',
      padding: '60px 0 30px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: 'var(--primary-100)'
            }}>
              GreenStore
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--primary-200)',
              marginBottom: '20px'
            }}>
              Your trusted partner for eco-friendly products that make a difference for our planet.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'var(--primary-100)'
            }}>
              Quick Links
            </h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <Link href="/" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Home</Link>
              <Link href="/products" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Products</Link>
              <Link href="/about" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>About Us</Link>
              <Link href="/contact" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Contact</Link>
            </div>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'var(--primary-100)'
            }}>
              Customer Service
            </h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <Link href="/shipping" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Shipping Info</Link>
              <Link href="/returns" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Returns</Link>
              <Link href="/faq" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>FAQ</Link>
              <Link href="/support" style={{color: 'var(--primary-200)', textDecoration: 'none'}}>Support</Link>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--primary-700)',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--primary-200)'
          }}>
            © 2024 GreenStore. All rights reserved. | Made with 💚 for the planet
          </p>
        </div>
      </div>
    </footer>
  )
}