require("dotenv").config();

// import express package
const express = require("express")

// import book model
const Book = require ("./books/model")

//import book routes
const bookRouter = require("./books/routes")

//define a port for our server to run on
const port = 5001

//store express package in variable called app
const app = express()

// server will expect JSON in the body of the request and will send JSON back in the response once
// a request is made.
app.use(express.json())

// sync tables on our database
// if the table doesnt already exist then create a new one
const syncTables = () => {
    Book.sync()
}

app.use (bookRouter)

// req = request
//res = response
app.get("/health", (req, res) =>{
    
    res.status(200).json({message: "Server is running"})
})

app.listen(port, ()=>{
    // called sync tables function once our server is running
    syncTables()
    console.log("Server is listening")
})