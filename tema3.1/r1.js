const express = require ("express")
const app = express()

app.use((request, response, next) =>{
    console.log("peticion recibida por cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    next();
});

app.get("/", (request, response) => {
    response.status(200).json({ ok: true, message: 'Recibido!'});
});

app.get("/bye", (request, response) => {
    response.status(200).json({ ok: true, message: 'Adios!'});
});

app.listen(1000)