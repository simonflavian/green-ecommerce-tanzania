'use client'

import { useState, useMemo, useEffect } from 'react'
import Header from '@/components/header'
import ProductCard from '@/components/product-card'
import Footer from '@/components/footer'
import SearchBar from '@/components/search-bar'
import CategoryFilter from '@/components/category-filter'
import SortDropdown from '@/components/sort-dropdown'
import LoadingSpinner from '@/components/loading-spinner'
import { allProducts, categories, Product } from '@/data/products'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product: Product) => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id; // Assuming higher ID = newer
        case 'featured':
        default:
          return 0; // Keep original order
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <main style={{minHeight: '60vh'}}>
          <LoadingSpinner />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      {/* Page Header */}
      <section style={{
        backgroundColor: 'var(--primary-50)',
        padding: '40px 0',
        borderBottom: '1px solid var(--primary-200)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'var(--primary-700)',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Our Products
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--gray-600)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover our complete collection of sustainable, eco-friendly products
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section style={{padding: '32px 0'}}>
        <div className="container">
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search eco-friendly products..."
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SortDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </section>

      {/* Products Grid */}
      <main style={{padding: '0 0 60px 0'}}>
        <div className="container">
          {/* Results Count */}
          <div style={{
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '16px',
              color: 'var(--gray-600)'
            }}>
              {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid or No Results */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="product-grid">
              {filteredAndSortedProducts.map((product: Product, index: number) => (
                <div 
                  key={product.id} 
                  className="product-card-enter"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSortBy('featured');
                }}
                className="btn btn-primary"
                style={{marginTop: '16px'}}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}