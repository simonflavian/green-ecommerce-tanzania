'use client'

import { useCart } from '@/context/cart-context'
import { Product } from '@/data/products'

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main style={{padding: '40px 0'}}>
      <div className="container">
        <div className="product-detail">
          {/* Product Image */}
          <div className="product-detail-image">
            {product.image}
          </div>
          
          {/* Product Info */}
          <div className="product-detail-info">
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'var(--gray-800)',
              marginBottom: '16px'
            }}>
              {product.name}
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: 'var(--primary-600)',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Category: {product.category}
            </p>
            
            <p style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'var(--primary-700)',
              marginBottom: '24px'
            }}>
              ${product.price}
            </p>
            
            <p style={{
              fontSize: '16px',
              color: 'var(--gray-600)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              {product.description}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{
                  padding: '16px 32px',
                  fontSize: '18px',
                  flex: '1',
                  minWidth: '200px'
                }}
              >
                Add to Cart
              </button>
              
              <a 
                href="/products" 
                className="btn"
                style={{
                  padding: '16px 32px',
                  fontSize: '18px',
                  backgroundColor: 'var(--gray-200)',
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Back to Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}