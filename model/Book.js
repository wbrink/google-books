const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title : {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 100
  }, 
  authors : {
    type: [String],
    required: true
  },
  description: {
    type: String
  },
  image: String,
  link: String
})

const Book = mongoose.model("Book", BookSchema);


module.exports = Book;