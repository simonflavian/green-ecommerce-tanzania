'use client'

import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes your products eco-friendly?",
    answer: "All our products are made from sustainable materials like bamboo, organic cotton, and recycled materials. We carefully select items that have minimal environmental impact and support sustainable manufacturing practices."
  },
  {
    question: "Do you deliver across Tanzania?",
    answer: "Yes! We deliver to all major cities and towns across Tanzania including Dar es Salaam, Dodoma, Arusha, Mwanza, and many more. Delivery times vary by location but typically take 2-5 business days."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, Tigo Pesa, Airtel Money, bank transfers, and cash on delivery for orders within Dar es Salaam. All prices are in Tanzanian Shillings (TSH)."
  },
  {
    question: "Can I return products if I'm not satisfied?",
    answer: "Yes, we offer a 30-day return policy for unused items in their original packaging. Contact our customer service team to initiate a return and we'll guide you through the process."
  },
  {
    question: "Are your products safe for children?",
    answer: "All our products are tested for safety and are made from non-toxic, natural materials. Items like our bamboo toothbrushes and organic cotton clothing are perfect for the whole family."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can use this to track your package's progress until it reaches you."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      backgroundColor: 'var(--gray-100)',
      padding: '80px 0'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'var(--primary-700)',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '12px',
                marginBottom: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--gray-800)'
                }}
              >
                <span>{faq.question}</span>
                <span style={{
                  fontSize: '24px',
                  color: 'var(--primary-700)',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div style={{
                  padding: '0 24px 24px 24px',
                  borderTop: '1px solid var(--gray-200)'
                }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'var(--gray-600)',
                    marginTop: '16px'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}