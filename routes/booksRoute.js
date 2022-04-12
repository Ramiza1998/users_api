const {Router} = require("express")
const {getBooks, createBoook, updateBooks}= require("../controllers/booksContrller")
const {bycategory, byAuthor} = require("../handler/books.handlers");


const router = Router();

router.router("/books").get([bycategory, byAuthor], getBooks).post(createBoook)

router.put("/books", updateBooks)



module.exports = router;