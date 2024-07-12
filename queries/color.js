const db = require('../db/dbConfig')


const getAllColors = async () => {
    // db.any() -- db is the connection to the database. `.any` is one of the methods that say what kind of data we're expecting to get back. "Any" specifically means we will be happy with ANY kind of data, as in NO data, SOME data, or just ONE piece of data
    try {
        const allColors = await db.any("SELECT * FROM colors")
        return allColors 
    } catch (error) {
        return error
    }
}


const getColor = async (id) => {
    try {
        const oneColor = await db.one("SELECT * FROM colors WHERE id=$1", id)
        return oneColor
    } catch (error) {
        return error
    }
}


const createColor = async (color) => {
    try {
        const newColor = await db.one("INSERT INTO colors (name, is_favorite) VALUES ($1, $2) RETURNING *", [color.name, color.is_favorite])
        return newColor
    } catch (error) {
        return error
    }
}

module.exports = { getAllColors, getColor, createColor }