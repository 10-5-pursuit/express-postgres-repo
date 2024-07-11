const express = require('express')
const app = express()
const cors = require('cors')
const colorsController = require('./controllers/colorsController')

// Middleware
app.use(express.json())
app.use(cors())
app.use('/colors', colorsController)

// localhost:4001/
app.get('/', (req, res) => {
    res.send('Welcome to Colors App!')
})

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found")
})

module.exports = app