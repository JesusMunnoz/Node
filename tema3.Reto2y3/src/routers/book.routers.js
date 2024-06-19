const { Router } = require ("express")
const router = Router();
const booksCtrl = require("../controller/book.controller")

router.get("/", booksCtrl.getBook);
router.post("/", booksCtrl.createBook);
router.put("/:id", booksCtrl.updateBook);
router.delete("/", booksCtrl.deleteBook);

module.exports = router;