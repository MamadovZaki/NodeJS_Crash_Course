const http = require('http');


// create server object 

http.createServer((request, response) => {
   //Write a response 
   response.write('Hello World');
   response.end();
}).listen(5000, () => console.log('Server is running .. '));

