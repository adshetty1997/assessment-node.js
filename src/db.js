const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

let bookSchema = new mongoose.Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    summary:{type: String},
});

const bookModel = mongoose.model("books",bookSchema);

const addBookEntry = (book) => bookModel.create({...book});
const getBookById = (bookId) => bookModel.findById(bookId);
const getAllBooks = () => bookModel.find();
const updateBook = (bookId,update) => bookModel.findOneAndUpdate({"_id":bookId},{...update});
const deleteBook = (bookId) => bookModel.deleteOne({ "_id": bookId });;

const connectDB = async(mongoUrl) => {
    await mongoose.connect(mongoUrl);
    mongoose.connection.on('error',(error)=>console.log(error));
    mongoose.connection.once("open", function () {
      console.log("DB Connected successfully");
    });
}

const castToID = (str) => {
    return new ObjectId(str);
}

module.exports = {
    connectDB,
    addBookEntry,
    getBookById,
    getAllBooks,
    updateBook,
    deleteBook,
    castToID
}