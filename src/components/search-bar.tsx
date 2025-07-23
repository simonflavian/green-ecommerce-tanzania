'use client'

import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search products..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // Real-time search as user types
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <span className="search-icon">🔍</span>
        </button>
      </div>
    </form>
  );
}