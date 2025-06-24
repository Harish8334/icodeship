import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url, helmetContext) {
  return new Promise((resolve, reject) => {
    try {
      const appHtml = renderToString(
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      );

      // Wait a tick to ensure all Helmet operations are complete
      setTimeout(() => {
        resolve(appHtml);
      }, 0);
    } catch (err) {
      console.error("❌ SSR render error:", err);
      reject(err);
    }
  });
}
