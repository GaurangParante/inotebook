const express = require('express');
const notes = express.Router();

notes.get('/',(req,res)=>{
   
    res.send([])
})

module.exports = notes;