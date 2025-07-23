export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-700), var(--primary-800))',
      color: 'var(--white)',
      padding: '80px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          Eco-Friendly Products
          <br />
          <span style={{color: 'var(--primary-200)'}}>For a Better Tomorrow</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          marginBottom: '32px',
          color: 'var(--primary-100)',
          maxWidth: '600px',
          margin: '0 auto 32px auto'
        }}>
          Discover sustainable, high-quality products that make a difference for you and the planet.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn" style={{
            backgroundColor: 'var(--white)',
            color: 'var(--primary-700)'
          }}>
            Shop Now
          </button>
          <button className="btn" style={{
            backgroundColor: 'transparent',
            color: 'var(--white)',
            border: '2px solid var(--white)'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}