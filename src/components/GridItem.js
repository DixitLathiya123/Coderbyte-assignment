// src/components/GridItem.js
import React from 'react';
import '../assets/styles/GridItem.css';

const GridItem = React.memo(({ name, posterImage }) => {
  const imageUrl = `https://test.create.diagnal.com/images/${posterImage}`;

  return (
    <div className="grid-item">
      <img src={imageUrl} alt={name} loading="lazy" />
      <div className="item-title" title={name}>{name}</div>
    </div>
  );
});

export default GridItem;
