import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--primary-700)',
        color: 'var(--white)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px'
          }}>
            About GreenStore
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--primary-100)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Your trusted partner in creating a sustainable future for Tanzania and beyond
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{textAlign: 'center'}}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'var(--primary-700)',
                marginBottom: '24px'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--gray-600)',
                marginBottom: '24px'
              }}>
                Founded in 2024 in the heart of Tanzania, GreenStore was born from a simple yet powerful vision: 
                to make sustainable, eco-friendly products accessible to every Tanzanian family while supporting 
                our beautiful environment.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--gray-600)'
              }}>
                We believe that small changes in our daily choices can create a massive positive impact on our 
                planet. From the bustling streets of Dar es Salaam to the serene landscapes of Arusha, we&apos;re 
                committed to bringing you products that are good for you and good for Mother Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section style={{
        backgroundColor: 'var(--primary-50)',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary-700)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                M
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--gray-800)',
                marginBottom: '16px'
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--gray-600)'
              }}>
                To provide high-quality, sustainable products that help Tanzanian families live healthier lives 
                while protecting our environment for future generations.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary-700)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                T
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--gray-800)',
                marginBottom: '16px'
              }}>
                Made for Tanzania
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--gray-600)'
              }}>
                All our products are carefully selected and priced in Tanzanian Shillings to serve our local 
                community with affordable, sustainable solutions.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary-700)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                V
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--gray-800)',
                marginBottom: '16px'
              }}>
                Our Values
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--gray-600)'
              }}>
                Sustainability, quality, affordability, and community. We believe in creating positive change 
                through conscious consumption and supporting local initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{padding: '80px 0'}}>
        <div className="container">
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'var(--primary-700)',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Why Choose GreenStore?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              padding: '24px',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--gray-800)',
                marginBottom: '12px'
              }}>
                Fast Delivery
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                Quick delivery across Tanzania, from Dodoma to Mwanza, ensuring you get your eco-friendly products fast.
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--gray-800)',
                marginBottom: '12px'
              }}>
                Fair Prices
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                Competitive prices in TSH, making sustainable living affordable for every Tanzanian family.
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--gray-800)',
                marginBottom: '12px'
              }}>
                Quality Guaranteed
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                Every product is tested and verified to meet our high standards for quality and sustainability.
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--gray-800)',
                marginBottom: '12px'
              }}>
                Local Impact
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                Supporting local communities and environmental initiatives across Tanzania with every purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: 'var(--primary-700)',
        color: 'var(--white)',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Ready to Go Green?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--primary-100)',
            marginBottom: '32px'
          }}>
            Join thousands of Tanzanians making a positive impact on our environment
          </p>
          <Link 
            href="/products" 
            className="btn"
            style={{
              backgroundColor: 'var(--white)',
              color: 'var(--primary-700)',
              padding: '16px 32px',
              fontSize: '18px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}