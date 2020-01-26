const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
 
    chat: {
        type: Schema.ObjectId
    },
    users: {
        type: [String],
        ref: 'users'
    }

})

const model = mongoose.model('chats', mySchema)
module.exports = model