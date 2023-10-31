const { getBookById, deleteBook, updateBook, addBookEntry, getAllBooks } = require("./db");

let getBooksList = async(req, res) => {
    let id = req.params.id;
    try{
        let resp;
        if(id){
            resp = await getBookById(id);
            if(!resp){
                throw new Error("Book not found.");
            }
            resp = [resp];
        }
        else{
            resp = await getAllBooks();
        }

        res.send({books:resp})
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
}

let addBook = async(req, res) => {
    let details = req.body;
    try{
        if(!!!details.title || !!!details.author || !!!details.summary){
            throw new Error("Book details not provided.");
        }
        let resp = await addBookEntry(details);
            if(!resp){
                throw new Error("There was an error adding this book details.");
            }

        res.send({message:"Book Added."})
    }
    catch(error){
        let match = error.message.match("E11000");
        if(match){
           error.message = "Duplicate entry." 
        }
        res.status(400).send({message:error.message});
    }
}

let removeBook = async(req, res) => {
    let id = req.params.id;
    try{
        if(!!!id){
            throw new Error("Book id not provided.");
        }
        let resp = await deleteBook(id);
        if(resp.deletedCount==0){
            throw new Error("No entry found for given book ID.");
        }

        res.send({message:"Book removed."})
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
}

let updateBookDetails = async(req, res) => {
    let id = req.params.id;
    let update = req.body;
    try{
        if(!!!id){
            throw new Error("Book id not provided.");
        }
        else if((Object.keys(update)).length<1){
            throw new Error("No info for update provided.");
        }
        let resp = await updateBook(id,update);
        if(!resp){
            throw new Error("No entry found for given book ID.");
        }

        res.send({message:"Book Updated."})
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
}

module.exports = {
    getBooksList,
    addBook,
    removeBook,
    updateBookDetails,
}