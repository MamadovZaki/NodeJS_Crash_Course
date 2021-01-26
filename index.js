const http = require("http");
const path = require("path");
const fs = require("fs");

function checkFileType(filePath) {
  /* 
    args: file path 
    return: type of content in the file: json, image, javascript .. etc 
  */
  // *get file extension
  let extname = path.extname(filePath);
  // *check extension and set content type
  switch (extname) {
    case ".js":
      return "text/javascript";
      break;
    case ".css":
      return "text/css";
      break;
    case ".json":
      return "application/json";
      break;
    case ".png":
      return "image/png";
      break;
    case ".jpg":
      return "image/jpg";
      break;
    default:
      return "text/html";
      break;
  }
}

function handleErrors(error, response) {
  //if page not found
  if (error.code === "ENOENT") {
    // Serve 404 page when request not found
    fs.readFile(
      path.join(__dirname, "public", "404.html"),
      (error, content) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content, "utf-8");
      }
    );
  } else {
    // handling any other error than page not found
    response.writeHead(500);
    response.end(`Server Error: ${err.code}`);
  }
}

const server = http.createServer((request, response) => {
  let filePath = path.join(
    __dirname,
    "/public",
    request.url === "/" ? "index.html" : request.url
  );
  //readFile
  fs.readFile(filePath, (err, content) => {
    // handling status code 404 -- failed operation
    if (err) {
      handleErrors(err, response);
    }
    // handling status code 200 OK -- Successful operation
    else {
      response.writeHead(200, { "Content-Type": checkFileType(filePath) });
      response.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Sever is running at ${PORT}`));
