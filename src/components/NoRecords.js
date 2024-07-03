import React from 'react';
import '../assets/styles/NoRecords.css';

const NoRecords = () => {
  return (
    <div className="no-records">
      <div className="no-records-content">
        <h1 className="no-records-title">No Records Found</h1>
        <p className="no-records-text">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    </div>
  );
};

export default NoRecords;
