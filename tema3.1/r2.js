const Book = require("./src/models/book");
const express = require ("express")
const cors = require("cors")
const app = express()

let mybk = new Book ("The Hobbit", "Kindle", "J.R.R. Tolkien", 10, "picture", 7, 1);

app.get("/", (req, res) => {
    //res.status(200).json({ ok: true, message: 'Recibido!'});
    //res.status(200).json({ ok: true, message: 'Recibido!' + mybk.author});
    res.status(200).json({message: mybk});
    //res.status(200).json({message: mybk2 = new Book ("The Hobbit", "Kindle", "J.R.R. Tolkien", 10, "picture", 7, 1)});
});

app.listen(2000)