import React, { useState } from 'react';
import '../assets/styles/GridItem.css';

const GridItem = React.memo(({ name, posterImage, searchTerm }) => {
  const [imageUrl] = useState(posterImage ? `https://test.create.diagnal.com/images/${posterImage}` : '');
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => (
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    ));
  };

  return (
    <div className="grid-item">
      <div className="image-container">
        {imageUrl && !isImageError ? (
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="image-error">Image not loading</div>
        )}
      </div>
      <div className="item-title" title={name}>{getHighlightedText(name, searchTerm)}</div>
    </div>
  );
});

export default GridItem;
