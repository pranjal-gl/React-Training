const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post('/create', (req, res)=>{
    const data = req.body;
    const user = new userModel({
        fname: data.fname,
        phone: data.phone,
        address: data.address
    })
    user.save().then((result)=>{
        res.send({msg: "User created successfully!"});
    }).catch((err)=>{
        res.send({msg: 'Some error occured!'});
    })
})
module.exports = router;