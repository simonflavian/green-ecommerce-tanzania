'use client'

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <h3 className="category-title">Categories</h3>
      <div className="category-buttons">
        <button
          onClick={() => onCategoryChange('all')}
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}