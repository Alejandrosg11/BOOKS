const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:String,
    name:String,
    description: String,
    author: String,
    raiting: Number
});

module.exports = mongoose.model("Book", bookSchema);