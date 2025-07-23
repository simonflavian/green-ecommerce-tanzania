'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useCart } from '@/context/cart-context'

export default function CartPage() {
  const { items, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <Header />
        <main style={{padding: '60px 0', minHeight: '60vh'}}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              padding: '60px 20px'
            }}>
              <h1 style={{
                fontSize: '32px',
                color: 'var(--primary-700)',
                marginBottom: '16px'
              }}>
                Your Cart is Empty
              </h1>
              <p style={{
                fontSize: '18px',
                color: 'var(--gray-600)',
                marginBottom: '32px'
              }}>
                Add some eco-friendly products to get started!
              </p>
              <a 
                href="/products" 
                className="btn btn-primary"
                style={{textDecoration: 'none'}}
              >
                Shop Now
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
          <h1 style={{
            fontSize: '32px',
            color: 'var(--primary-700)',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            Shopping Cart
          </h1>

          {/* Cart Items */}
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {item.image}
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="cart-remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <button className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}