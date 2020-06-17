const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const db = require("../model");

const router = express.Router();

// // get the book searched
router.post("/api/get",  async (req,res) => {
  let search = req.body.search;
  
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    // console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error("error");
    return res.json(error);
  }
  
})


router.post("/api/save", (req, res) => {
  const {id, title, authors, description, image, link} = req.body;

  db.Book.create({_id: id, title: title, authors: authors, description: description, image: image, link: link}, (err, doc) => {
    if (err) {
      return res.json(false)
    } else {
      return res.json(doc);
    }
  })
})


router.get("/api/getSavedBooks", (req,res) => {
  db.Book.find({}, (err, docs) => {
    if (err) {
      res.json(false); 
    } else {
      res.json(docs);
    }
  })
})

router.delete("/api/deleteBook", (req,res) => {
  const id = req.body.id;
  db.Book.findOneAndDelete({_id: id}, (err, doc) => {
    if (err) {
      res.json(false); 
    } else {
      res.json(doc);
    }
  })
})



module.exports = router;