const express = require("express")
const cors = require("cors")
const bookRouter = require("./routers/book.routers")
const booksRouter = require("./routers/books.routers")
const errorHandling = require("./error/errorHandling")

const app = express();

app.set("port", process.env.port || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/book", bookRouter);
app.use("/books", booksRouter); 

app.use(function(req, res, next)
    {
        res.status(404).json({error:true,
                                codigo: 404,
                                message: "endpoint not found"})
    })

/*app.use((req, res, next) => {
    res.status(404).json({error: true,
        codigo: 404,
        message: "Endpoint doesnt found"
    });
});*/

app.use (errorHandling);

module.exports = app;

/*
app.exports = app;
 
app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(booksRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({error:true, 
                              codigo: 404, 
                              message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;
*/