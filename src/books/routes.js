// iomport router library from express
const {Router} = require("express")


//define our Router
const bookRouter = Router()

const {addBook,getAllBooks,updateBook, deleteBook, deleteAllBooks} = require ("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getAllBooks",getAllBooks)
bookRouter.put("/books/updateBook", updateBook)
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks)

module.exports = bookRouter