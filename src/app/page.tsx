import Header from '@/components/header'
import Hero from '@/components/hero'
import ProductCard from '@/components/product-card'
import Footer from '@/components/footer'
import { featuredProducts } from '@/data/products'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main style={{padding: '60px 0'}}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            color: 'var(--primary-700)',
            marginBottom: '16px'
          }}>
            Featured Products
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: 'var(--gray-600)',
            marginBottom: '40px'
          }}>
            Discover our most popular eco-friendly products
          </p>
          
          <div className="product-grid">
            {featuredProducts.map((product) => (
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