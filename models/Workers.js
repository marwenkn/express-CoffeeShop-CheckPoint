const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkersSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    }
})

const Workers = mongoose.model('Workers', WorkersSchema)

module.exports = Workers