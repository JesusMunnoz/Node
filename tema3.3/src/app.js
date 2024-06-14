const express = require("express")
const cors = require("cors")
const booksRouter = require("./routers/book.routers")
const errorHandling = require("./error/errorHandling")

const app = express();

app.set("port", process.env.port || 4000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/book", booksRouter);

app.use((req, res, next) => {
    res.status(404).json({error: true,
        codigo: 404,
        message: "Endpoint doesnt found"
    });
});

app.use (errorHandling);

module.exports = app;