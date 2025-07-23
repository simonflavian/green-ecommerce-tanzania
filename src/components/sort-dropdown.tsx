'use client'

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

export default function SortDropdown({ sortBy, onSortChange }: SortDropdownProps) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select" style={{
        fontSize: '16px',
        fontWeight: '500',
        color: 'var(--gray-700)',
        marginRight: '12px'
      }}>
        Sort by:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="featured">Featured</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
}