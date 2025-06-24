import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  let vite;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  async function renderPage(req, res) {
    const url = req.originalUrl;
    console.log('\n🔵 [Request] ', url);
    console.log('NODE_ENV:', process.env.NODE_ENV);

    try {
      let template, render;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('../dist/server/entry-server.js')).render;
      }

      const appHtml = await render(url);
      console.log('✅ Rendered HTML for:', url);

      const html = template.replace('<!--app-html-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      console.error('❌ Error during render:\n', e.stack || e);
      if (!isProd && vite) vite.ssrFixStacktrace(e);
      res.status(500).end(e.stack || e.message);
    }
  }

  app.use('*', renderPage);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`\n🚀 Server running at http://localhost:${port}`);
  });
}

startServer();
