import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductDetailClient from '@/components/product-detail-client'
import { allProducts, Product } from '@/data/products'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = allProducts.find((p: Product) => p.id === productId);

  if (!product) {
    return (
      <div>
        <Header />
        <main style={{padding: '60px 0', textAlign: 'center'}}>
          <div className="container">
            <h1 style={{color: 'var(--primary-700)', marginBottom: '16px'}}>Product Not Found</h1>
            <a href="/products" className="btn btn-primary" style={{textDecoration: 'none'}}>
              Back to Products
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <ProductDetailClient product={product} />
      <Footer />
    </div>
  );
}