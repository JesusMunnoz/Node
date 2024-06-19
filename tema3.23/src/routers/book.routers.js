const { Router } = require ("express")
const router = Router();
const booksCtrl = require("../controller/book.controller")
const bookssCtrl = require("../controller/books.controller")

router.get("/", booksCtrl.getBook);

router.post("/", booksCtrl.createBook);

router.put("/:id", booksCtrl.updateBook);

router.delete("/", booksCtrl.deleteBook); //router.delete("/:id", booksCtrl.deleteBook);

module.exports = router;

/*
{
  "title": "The Hobbit ",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 10,
  "photo": "https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg",
  "id_book": 1,
  "id_user": 1
}

{
  "title": "Lord of the rings ",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 10,
  "photo": "picture",
  "id_book": 2,
  "id_user": 1
}

{
  "title": "The Hobbit -extended",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 105,
  "photo": "picture",
  "id_book": 3,
  "id_user": 1
}
*/