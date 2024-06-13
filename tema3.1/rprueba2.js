const express = require ("express")
const app = express()

app.get("/", function (request, response){
    console.log("request receive from the client on the express server");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    console.log(request);
    response.send("Hello from empress server!");
    
});

app.listen(4000)