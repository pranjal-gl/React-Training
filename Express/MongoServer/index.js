const express=require('express')
const app=express()
const bp=require('body-parser')
app.use(bp.json())
const createUser = require('./controllers/createUser');
app.use('/', createUser);
app.listen(3001, ()=>{
    console.log("Server started at port 3001");
})