const http = require("http");
const fs = require("fs");

// Cria o servidor
const server = http.createServer((req, res) => {
  // Lê o arquivo HTML
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erro interno no servidor");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

// Porta 3000
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
