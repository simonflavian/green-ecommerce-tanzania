'use client'

import { useState } from 'react'
import { useWishlist } from '@/context/wishlist-context'
import ToastNotification from './toast-notification'

interface WishlistButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  size?: 'small' | 'medium' | 'large';
}

export default function WishlistButton({ product, size = 'medium' }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'info'>('success');
  
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
      setToastMessage(`${product.name} removed from your wishlist`);
      setToastType('info');
    } else {
      addToWishlist(product);
      setToastMessage(`${product.name} saved to your wishlist! 💚`);
      setToastType('success');
    }
    setShowToast(true);
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return { width: '32px', height: '32px', fontSize: '14px' };
      case 'large':
        return { width: '48px', height: '48px', fontSize: '20px' };
      default:
        return { width: '40px', height: '40px', fontSize: '16px' };
    }
  };

  const buttonSize = getButtonSize();

  return (
    <>
      <button
        onClick={handleWishlistToggle}
        className="wishlist-btn"
        title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        style={{
          ...buttonSize,
          backgroundColor: inWishlist ? 'var(--primary-700)' : 'rgba(255, 255, 255, 0.95)',
          color: inWishlist ? 'var(--white)' : 'var(--gray-600)',
          border: `2px solid ${inWishlist ? 'var(--primary-700)' : 'rgba(0,0,0,0.1)'}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          position: 'absolute',
          top: '12px',
          right: '12px',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          boxShadow: inWishlist ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={(e) => {
          if (!inWishlist) {
            e.currentTarget.style.backgroundColor = 'var(--primary-50)';
            e.currentTarget.style.borderColor = 'var(--primary-500)';
            e.currentTarget.style.color = 'var(--primary-700)';
            e.currentTarget.style.transform = 'scale(1.1)';
          } else {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!inWishlist) {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
            e.currentTarget.style.color = 'var(--gray-600)';
          }
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={inWishlist ? "currentColor" : "none"} 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      
      <ToastNotification
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        actionButton={{
          text: inWishlist ? 'Continue Shopping' : 'View My Wishlist',
          onClick: () => {
            if (inWishlist) {
              window.location.href = '/products';
            } else {
              window.location.href = '/wishlist';
            }
            setShowToast(false);
          }
        }}
      />
    </>
  );
}