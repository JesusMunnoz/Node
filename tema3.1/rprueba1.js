const http = require("http");

const server = http.createServer(function (request, response)
{
    console.log("request from client");
    console.log("Header request: " + request.headers.host);
    console.log("Header Method: " + request.method);
    console.log("Header URL: " + request.url);
    console.log("Response Status code: " + response.statusCode);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World from server")
    response.end();
});

server.listen(2000);

// 1º - node p2.js
// 2º - http://http://localhost:2000