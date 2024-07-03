import React, { forwardRef } from 'react';
import '../assets/styles/SearchBar.css';

const SearchBar = forwardRef(({ onSearch }, ref) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        ref={ref}
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
    </div>
  );
});

export default SearchBar;
