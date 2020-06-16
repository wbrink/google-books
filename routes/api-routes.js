const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const router = express.Router();

// // get the book searched
router.post("/api/get",  async (req,res) => {
  let search = req.body.search;
  
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error("error");
    return res.json(error);
  }
  
})



module.exports = router;