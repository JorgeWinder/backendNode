const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'users' // Colleción donde está vinculado el campo de referencia //
    },
    message: {
        type: String,
        require: true,
    },
    date: Date,
    file: String
})

const model = mongoose.model('mensajes', mySchema)
module.exports = model
