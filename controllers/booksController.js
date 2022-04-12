const books = require("../data/books");


//get all books
const getbooks = (req, res)=>{
    res.status(200).json({success:true, data:books});
}

//post a book
const createbook =(req, res)=>{
    const book = req.body;
    books.push(book)

    res.status(200).json({success:true, data:books})   
}

//update a books
const updateBooks =(req, res)=>{
    const isbn =req.query.isbn;
    const data = req.body;

    let book =books.filter((b)=>b.isbn ==isbn);
    let _book = {...book[0], ...data };


    books.map((b)=>(b.isbn == isbn? _book :b));

    res.status(200).json({books})
}

module.exports={getbooks, createbook, updateBooks}