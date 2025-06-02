import { createServer as createViteServer } from 'vite';
import express from 'express';
import fs from 'fs';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      const render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      const appHtml = (await render()).html;
      const html = template.replace(`<!--app-html-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (err) {
      vite.ssrFixStacktrace(err);
      console.error(err);
      res.status(500).end(err.message);
    }
  });

  app.listen(5173, () => {
    console.log('SSR server running at http://localhost:5173');
  });
}

startServer();
