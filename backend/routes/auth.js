const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const obj = {
        name: "Ravi",
        class: "5th",
        rollno: 1
    }
    res.send(obj)
})

module.exports = router;