const express = require('express');
const router  = express.Router();
const Book = require('../models/book.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find()
    .then(books => {
      res.render("books", { books })
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/book/:id', (req,res)=>{
  let _id = req.params.id
  Book.findById({_id})
  .then(book=>{
    res.render("book-detail", book)
  })
})


module.exports = router;
