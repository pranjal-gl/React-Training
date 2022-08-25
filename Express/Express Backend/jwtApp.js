const express = require('express')
const cors = require('cors');
const app = express()
const bp = require('body-parser')
const jwt = require('jsonwebtoken')
app.use(cors())
const userCredentials = require('./data/credentials')
app.use(bp.json())

app.post('/signin', (req, res) => {
    const data = req.body
    const result = userCredentials.find((item) => item.email === data.email)
    if (data.password === result.password) {
        const token = jwt.sign({ email: data.email }, 'jamesbond')
        res.send({ "msg": 'authenticated', "status": true, "accesstoken": token })
    }
    else {
        res.send({ "msg": ' not authenticated', "status": false })
    }
})

app.post('/update', (req, res) => {
    const inputtoken = req.headers.authorization
    const token = inputtoken.replace('Bearer ', '')
    console.log(req.body);
    try {
        const result = jwt.verify(token, 'jamesbond')
        res.send({ "msg": 'updated successfully' })
    }
    catch (e) {
        res.send({ "msg": 'you are not authorized' })
    }
})

app.post('/delete', (req, res) => {
    const inputtoken = req.headers.authorization
    const token = inputtoken.replace('Bearer ', '')
    try {
        const result = jwt.verify(token, 'jamesbond');
        localStorage.removeItem('accesstoken');
        res.send({ "msg": 'deleted successfully' })
    }
    catch (e) {
        res.send({ "msg": 'you are not authorized' })
    }
})

app.listen(3001, () => console.log('server started at port 3001'))