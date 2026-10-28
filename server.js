/**
 * Servidor HTTP Local com Detecção Automática de Porta Livre
 * Vexa Web Studio - Zero dependências externas
 * 
 * Se a porta 3000 estiver ocupada, ele automaticamente tenta 3001, 3002, etc.
 * Você também pode passar uma porta personalizada:
 *   node server.js 8080
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = parseInt(process.argv[2] || process.env.PORT || '3000', 10);
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

function createServer() {
  return http.createServer((req, res) => {
    let parsedUrl = req.url.split('?')[0];
    if (parsedUrl === '/') {
      parsedUrl = '/index.html';
    }

    const filePath = path.join(BASE_DIR, decodeURIComponent(parsedUrl));

    // Prevenção de Path Traversal
    if (!filePath.startsWith(BASE_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('403 Acesso Negado');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Página não encontrada</h1>');
        return;
      }

      let actualFile = filePath;
      if (stats.isDirectory()) {
        actualFile = path.join(filePath, 'index.html');
      }

      fs.readFile(actualFile, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>404 Arquivo não encontrado</h1>');
          return;
        }

        const ext = path.extname(actualFile).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
        });
        res.end(content);
      });
    });
  });
}

function startListening(port) {
  const server = createServer();

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️  A porta ${port} já está em uso por outro aplicativo.`);
      const nextPort = port + 1;
      console.log(`🔄 Tentando automaticamente a porta ${nextPort}...`);
      startListening(nextPort);
    } else {
      console.error('Erro ao iniciar o servidor:', err);
    }
  });

  server.listen(port, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Vexa Web Studio — Servidor Local Iniciado!`);
    console.log(`👉 Acesse no navegador: http://localhost:${port}`);
    console.log(`==================================================`);
    console.log(`💡 Pressione Ctrl + C no terminal para encerrar.\n`);
  });
}

startListening(DEFAULT_PORT);
