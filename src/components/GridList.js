// src/components/GridList.js
import React from 'react';
import '../assets/styles/GridList.css';
import GridItem from './GridItem';

const GridList = ({ data }) => {
  return (
    <div className="grid-list">
      {data.map((item, index) => (
        <GridItem key={index} name={item.name} posterImage={item['poster-image']} />
      ))}
    </div>
  );
};

export default GridList;
