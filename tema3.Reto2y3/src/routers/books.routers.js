const { Router } = require ("express")
const router = Router();
const booksCtrl = require("../controller/books.controller")

router.get("/", booksCtrl.getBooks);

router.post("/", booksCtrl.createBooks);

router.put("/:id", booksCtrl.updateBooks);

router.delete("/:id", booksCtrl.deleteBooks);

router.get("/:id", booksCtrl.getBooksId);

module.exports = router;