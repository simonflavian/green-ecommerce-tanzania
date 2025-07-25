import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import ProductDetailClient from '@/components/product-detail-client'
import { allProducts, Product } from '@/data/products'

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = allProducts.find((p: Product) => p.id === productId);

  if (!product) {
    return (
      <div>
        <Header />
        <main style={{padding: '60px 0', textAlign: 'center'}}>
          <div className="container">
            <h1 style={{color: 'var(--primary-700)', marginBottom: '16px'}}>Product Not Found</h1>
            <Link href="/products" className="btn btn-primary" style={{textDecoration: 'none'}}>
              Back to Products
            </Link>
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