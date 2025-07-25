'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { useWishlist } from '@/context/wishlist-context'

export default function WishlistPage() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div>
        <Header />
        <main style={{padding: '60px 0', minHeight: '60vh'}}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                backgroundColor: 'var(--primary-50)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--primary-700)" 
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              
              <h1 style={{
                fontSize: '28px',
                color: 'var(--gray-800)',
                marginBottom: '12px',
                fontWeight: '600'
              }}>
                Your Wishlist is Empty
              </h1>
              
              <p style={{
                fontSize: '16px',
                color: 'var(--gray-600)',
                marginBottom: '32px',
                lineHeight: '1.5'
              }}>
                Start building your wishlist by adding your favorite eco-friendly products. 
                Save items you love and shop them later!
              </p>
              
              <a 
                href="/products" 
                className="btn btn-primary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" x2="21" y1="6" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Explore Products
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main style={{padding: '40px 0', minHeight: '60vh'}}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '32px',
              color: 'var(--gray-800)',
              marginBottom: '8px',
              fontWeight: '600'
            }}>
              My Wishlist
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'var(--gray-600)'
            }}>
              {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>

          <div className="product-grid">
            {items.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
