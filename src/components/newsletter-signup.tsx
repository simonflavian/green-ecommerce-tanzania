'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div style={{
        backgroundColor: 'var(--primary-700)',
        color: 'var(--white)',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h3 style={{
            fontSize: '24px',
            marginBottom: '16px'
          }}>
            Thank You for Subscribing!
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--primary-100)'
          }}>
            You'll receive our latest eco-friendly product updates and special offers.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section style={{
      backgroundColor: 'var(--primary-700)',
      color: 'var(--white)',
      padding: '60px 0'
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Stay Updated
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--primary-100)',
            marginBottom: '32px'
          }}>
            Subscribe to our newsletter for the latest eco-friendly products, tips, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="newsletter-btn"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <p style={{
            fontSize: '14px',
            color: 'var(--primary-200)',
            marginTop: '16px'
          }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}