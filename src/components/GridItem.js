import React from 'react';
import '../assets/styles/GridItem.css';

const GridItem = React.memo(({ name, posterImage, searchTerm }) => {
  // Use a default placeholder image if the posterImage is missing
  const placeholderImage = 'https://via.placeholder.com/150';
  const imageUrl = posterImage ? `https://test.create.diagnal.com/images/${posterImage}` : placeholderImage;

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => (
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    ));
  };

  return (
    <div className="grid-item">
      <img src={imageUrl} alt={name} loading="lazy" />
      <div className="item-title" title={name}>{getHighlightedText(name, searchTerm)}</div>
    </div>
  );
});

export default GridItem;
