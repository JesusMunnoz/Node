const Book = require("../models/book");

let arrBooks = [];

function getBook (req, res){
    res.json(arrBooks);
};

function createBook (req, res) {
    let {title, type, author, price, photo, id_book, id_user} = req.body;
    let newBook = new Book (title, type, author, price, photo, id_book, id_user);
    arrBooks.push(newBook);
    res.status(201).json(newBook);
};

function updateBook (req, res) {
    let {id} = req.params;
    let {title, type, author, price, photo} = req.body;
    let bookIndex = arrBooks.findIndex(book => book.id_book == parseInt(id));
    if(bookIndex != -1) {
        arrBooks[bookIndex].title = title;
        arrBooks[bookIndex].type = type;
        arrBooks[bookIndex].author = author;
        arrBooks[bookIndex].price = price;
        arrBooks[bookIndex].photo = photo;

        res.json(arrBooks[bookIndex])
    }else{
        res.status(404).json({message:"error, libro no encontrado"});
    }
};

function deleteBook (req, res) {
    let {id} = req.params;
    let bookIndex = arrBooks.findIndex(book => book.id_book == parseInt(id));
    if (bookIndex != -1){
        let deleteBook = arrBooks.splice(bookIndex, 1);
        
        res.json(deleteBook[0]);
    }else{
        res.status(404).json({message:"error, libro no encontrado"});
    }
};

function getBookId(req, res) {
    let id = parseInt(req.query.id);
    let book = arrBooks.find(book => book.id_book == id);
    if (book) {
        res.json(book);
    }else{
        res.status(404).json({message: "error, libro no encontrado"})
    }
}

module.exports = {getBook, createBook, updateBook, deleteBook, getBookId}
