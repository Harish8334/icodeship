import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url) {
  try {
    return renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
  } catch (err) {
    console.error("❌ SSR render error:", err);
    return `<div style="color:red">SSR Error: ${err.message}</div>`;
  }
}
