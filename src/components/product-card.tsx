'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/context/cart-context'
import ToastNotification from './toast-notification'
import { formatPrice } from '@/utils/format-price'

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
    setShowToast(true);
  };

  return (
    <>
      <Link href={`/products/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }}>
          
          <div style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: 'var(--gray-600)'
          }}>
            {image || 'Product Image'}
          </div>
          
          <div style={{padding: '20px', flex: 1, display: 'flex', flexDirection: 'column'}}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--gray-800)',
              marginBottom: '8px'
            }}>
              {name}
            </h3>
            
            <p style={{
              fontSize: '14px',
              color: 'var(--gray-600)',
              marginBottom: '12px',
              lineHeight: '1.4',
              flex: 1
            }}>
              {description}
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto'
            }}>
              <span style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'var(--primary-700)'
              }}>
                {formatPrice(price)}
              </span>
              
              <button 
                className="btn btn-primary" 
                style={{
                  padding: '8px 16px',
                  fontSize: '14px'
                }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
      
      <ToastNotification
        message={`${name} added to cart!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}