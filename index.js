const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile(
      path.join(__dirname, "/public", "index.html"),
      (err, content) => {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
      }
    );
  }
  if (request.url === "/about") {
    fs.readFile(
      path.join(__dirname, "/public", "about.html"),
      (err, content) => {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
      }
    );
  }
  if (request.url === "/api/users") {
    const users = [
      {
        name: "Bob",
        age: 40,
      },
      {
        name: "John",
        age: 60,
      },
    ];
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Sever is running at ${PORT}`));
