const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu