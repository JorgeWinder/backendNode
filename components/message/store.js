const list = []

const model = require('./model')


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
                filter = { user: filteruser}
            }

            //const messages = await model.find()
            model.find(filter)
            .populate('user') // Campo que será vinculado y populado con datos de la otra collección 
            .exec((error, populated)=>{
                if(error){
                    rechazar("Error" + error)
                    return false
                }
                resolver(populated)
            })
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
