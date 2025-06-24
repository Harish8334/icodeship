import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// Create the helmet context
const helmetContext = {};

// Hydrate the app
hydrateRoot(
  document.getElementById('root'),
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
); 