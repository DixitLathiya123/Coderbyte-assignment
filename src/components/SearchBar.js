import React, { forwardRef, useState } from 'react';
import '../assets/styles/SearchBar.css';

const SearchBar = forwardRef(({ onSearch }, ref) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) { // Limiting to 50 characters
      setSearchTerm(value);
      onSearch(value.trim());
    }
  };

  const searchHints = [
    'Search for movies...',
    'Try "Romantic Comedy"...',
    'Find your favorite films...'
  ];

  const randomHint = searchHints[Math.floor(Math.random() * searchHints.length)];

  return (
    <div className="search-bar-container">
      <input
        ref={ref}
        type="text"
        placeholder={randomHint}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
});

export default SearchBar;
