const express = require('express')
const colors = express.Router()
const { getAllColors } = require('../queries/color')


// Index: localhost:4001/colors/
colors.get("/", async (req, res) => {
    const allColors = await getAllColors()
    if (allColors[0]) {
        res.status(200).json(allColors)
    } else {
        res.status(500).json({ error: "Internal Servor Error"})
    }
})



module.exports = colors