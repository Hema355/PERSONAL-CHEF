const express = require('express');
const router = express.Router();
router.post('/name',(req,res)=>{
    res.send('response from recipe to name')
})
module.exports=router;

