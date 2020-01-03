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
async function getMessage(filteruser){

    return new Promise( async(resolver, rechazar)=>{
        //return list
            let filter = {}
            console.log(filteruser)

            if(filteruser !== null){
                // filter = {message: 'mensaje para ref user v2'}
                filter = { user: filteruser}
            }

            resolver(model.find())

            // await model.find(filter).populate('user')
            // .exec((error, populated)=>{
            //     if(error){
            //         rechazar()
            //         return false
            //     }
            //     resolver(populated)
            // })
    })
    
}

async function updateMesage(id, mensaje){

    const find_mensaje = await model.findOne({_id: id})
    find_mensaje.message = mensaje
    return await find_mensaje.save()

}

module.exports = {
    add: addMessage,
    List: getMessage,
    update: updateMesage
}
