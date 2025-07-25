'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--primary-50)',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'var(--primary-700)',
            marginBottom: '16px'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--gray-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{padding: '60px 0'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '48px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'var(--gray-800)',
                marginBottom: '24px'
              }}>
                Get in Touch
              </h2>
              
              <div style={{marginBottom: '32px'}}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--primary-700)',
                  marginBottom: '16px'
                }}>
                  Our Office
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--gray-600)',
                  lineHeight: '1.6',
                  marginBottom: '8px'
                }}>
                  123 Uhuru Street<br />
                  Dar es Salaam, Tanzania<br />
                  P.O. Box 12345
                </p>
              </div>

              <div style={{marginBottom: '32px'}}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--primary-700)',
                  marginBottom: '16px'
                }}>
                  Contact Information
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--gray-600)',
                  lineHeight: '1.6',
                  marginBottom: '8px'
                }}>
                  <strong>Phone:</strong> +255 123 456 789<br />
                  <strong>Email:</strong> info@greenstore.co.tz<br />
                  <strong>WhatsApp:</strong> +255 987 654 321
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--primary-700)',
                  marginBottom: '16px'
                }}>
                  Business Hours
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--gray-600)',
                  lineHeight: '1.6'
                }}>
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 9:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'var(--gray-800)',
                marginBottom: '24px'
              }}>
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div style={{
                  backgroundColor: 'var(--primary-50)',
                  border: '2px solid var(--primary-200)',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    color: 'var(--primary-700)',
                    marginBottom: '16px'
                  }}>
                    Thank You!
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--gray-600)'
                  }}>
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary"
                    style={{marginTop: '16px'}}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+255 123 456 789"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="order">Order Support</option>
                        <option value="shipping">Shipping Information</option>
                        <option value="return">Returns & Refunds</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '18px'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}