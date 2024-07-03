// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/global.css';
import './assets/styles/theme.css';
import App from './App';

// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

// Sentry.init({
//   dsn: 'YOUR_SENTRY_DSN',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
