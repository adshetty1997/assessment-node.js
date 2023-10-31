const express = require('express');
const bodyParser = require('body-parser');
const {addBook, getBooksList, removeBook, updateBookDetails } = require('./src/api');
const { connectDB } = require('./src/db');


// CONSTANT VALUES
const PORT = 3000
const MONGO_USERNAME = "demo_user"
const MONGO_PASSWORD = "Pfk7DNKC1VOmEZdu"
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.njhrx.mongodb.net/assignment?retryWrites=true&w=majority`


// EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// END POINTS
app.post('/', addBook);
app.get('/:id?', getBooksList);
app.put('/:id', updateBookDetails);
app.delete('/:id', removeBook);
app.all("*", (req,res)=>{
    res.status(404).send({"message":"Requested API not found."});
})


//START EXPRESS APP
app.listen(PORT, async() => {
    await connectDB(MONGO_URL);
    console.log("Server is listening on port "+PORT);
});