const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StudentDBex'
const app = express() 

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
app.get('/', (req, res) => {
    res.send('Hello, Express...')
})

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)

app.get('/', (req, res) => {
    res.send('Hello, Express...')
})
app.listen(9000,() => {
    console.log('Server started')
})