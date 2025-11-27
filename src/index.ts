import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node + TypeScript with VS Code Live Reload!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
