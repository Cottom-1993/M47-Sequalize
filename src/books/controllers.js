const Book = require("./model")

const addBook = async (req, res) => {

    try {
        // Create a new user
        // add the new book to the database
        const newBook = await Book.create ({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })
        res.status(201).json({messsage: "success", book: newBook})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const getAllBooks = async (req,res) =>{
    try {
        const books = await Book.findAll()
        res.status(200).json({message: "success", books: books})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const updateBook = async (req,res) => {
    try {
        // update the author of a book in a database
        const updateBook = await Book.update(
           // the new author we want the book to have
            {
                author: req.body.newAuthor
            },
            // update author where the title is equal to the title passed
            //in the request body.
            {
                where: {
                    title: req.body.title
                }
            }
    )
    res.status(200).json ({message: "success", updateResult: updateBook})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}
const deleteBook = async (req,res) => {
try {
    // delete book from the database where the title is equal to the 
    // title passed in the request
    const deleteBook = await Book.destroy ({
        where:{
            title: req.body.title
        }
    })
    res.status(201).json({message: "success", book: deleteBook})
    
} catch (error) {
         res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}
// The below code is created in the same principle as above yet we have removed the where function to not look for as pecific title, but to delete all books
const deleteAllBooks = async (req,res) => {
    
    try {
        const deleteAllBooks = await Book.destroy
           

        res.status(201).json({message: "success", book: deleteAllBooks}) 

    } catch (error) {
            res.status(501).json({errorMessage: error.message, error: error});
            console.log(error)
    }
}

module.exports = {
    addBook, 
    getAllBooks,
    updateBook,
    deleteBook,
    deleteAllBooks
}