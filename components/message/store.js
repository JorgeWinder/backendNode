const list = []

const db = require('mongoose')
const model = require('./model')

// mongodb+srv://user-mbd:<password>@cluster0-qmwio.gcp.mongodb.net/test

db.Promise = global.Promise
db.connect('mongodb+srv://user-mbd:92kTFt6OQqlKe1Gu@cluster0-qmwio.gcp.mongodb.net/telegrom', {
    useNewUrlParser: true, useUnifiedTopology: true
})
console.log('[DB] Conectada con éxito')

// Agregar datos //
function addMessage(message){
    //list.push(message)
    const myMessage = new model(message)
    myMessage.save()     
}

// Listar datos //
async function getMessage(){
    //return list
    const messages = await model.find()
    return messages
}

async function updateMesage(id, nuevo_mensaje){

    const filtro = {}

    if(filtro==null){
        Promise.reject('No se hizo registro')
        return false
    }

    const mensaje = await model.findOne({_id: id})
    mensaje.message = nuevo_mensaje
    mensaje.save()

}

module.exports = {
    add: addMessage,
    List: getMessage,
    update: updateMesage
}
