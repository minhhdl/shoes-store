const express = require('express');
const bodyParser = require('body-parser');
const { parse } = require('url');
const next = require('next');
const { join } = require('path');
const customRoute = require('./routes');
const api = require('./api');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';


const app = next({ dev });
const handler = customRoute.getRequestHandler(app);


app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.use('/api', api);

    // use next.js
    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const rootStaticFiles = [
        '/img',
      ];
      const pathname = parsedUrl.pathname || '';
      const isServeStatic = rootStaticFiles.some(i => pathname.includes(i));
      if (isServeStatic) {
        const path = join(__dirname, '../static', parsedUrl.pathname);
        return app.serveStatic(req, res, path);
      }
      return handler(req, res, parsedUrl);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });