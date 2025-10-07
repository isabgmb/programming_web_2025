// server.js
const http = require("http"); // built-in lib
const hello = require("./hello"); // app code

// Throw together a tiny HTTP server
http.createServer(function (request, response) {
    // Send the HTTP headers: HTTP Status: 200 : OK
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end(hello.helloText);
 }).listen(8080);
