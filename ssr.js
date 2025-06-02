import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../src/App'; // your root React component
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const indexFile = path.resolve('./index.html');
    let template = fs.readFileSync(indexFile, 'utf-8');

    const appHtml = renderToString(<App />);

    const html = template.replace('<!--app-html-->', appHtml);

    res.status(200).setHeader('Content-Type', 'text/html').end(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('SSR Error');
  }
}
