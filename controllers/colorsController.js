const express = require('express')
const colors = express.Router()
const { getAllColors, getColor, createColor } = require('../queries/color')
const { checkName } = require('../validations/checkColors')


// Index: localhost:4001/colors/
colors.get("/", async (req, res) => {
    const allColors = await getAllColors()
    if (allColors[0]) {
        res.status(200).json(allColors)
    } else {
        res.status(500).json({ error: "Internal Servor Error" })
    }
})

// Show: localhost:4001/colors/1
colors.get('/:id', async (req, res) => {
    const { id } = req.params
    const singleColor = await getColor(id)
    if(singleColor.id){
        res.status(200).json(singleColor)
    } else {
        res.status(404).json({ error: "Color Not Found" })
    }
})

// Create: localhost:4001/colors/
colors.post('/', checkName, async (req, res) => {
    const newColor = await createColor(req.body)
    res.json(newColor)
})

module.exports = colors