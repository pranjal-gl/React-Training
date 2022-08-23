const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const app = express();
const port = 3002;
const db = require('./db.json');
app.use(cors())
app.use(bp.json());

app.get('/products', (req, res) => {
    res.json(db.products)
});
app.get('/userCartData', (req, res)=>{
    res.json(db.userCartData)
});
app.post('/createUser', (req, res)=>{
    console.log(req.body);
    res.send("Added data");

})

app.listen(port, () => {
    console.log("Server started at port", port);
});