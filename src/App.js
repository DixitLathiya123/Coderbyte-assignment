// src/App.js
import React from 'react';
import ContentListPage from './pages/ContentListPage';
import DataProvider from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <ContentListPage />
    </DataProvider>
  );
};

export default App;
