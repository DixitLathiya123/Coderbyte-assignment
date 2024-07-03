// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/global.css';
import './assets/styles/theme.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
