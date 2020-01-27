const model = require('./model')


// Listar datos //

async function getChats(){

    return new Promise( async(resolver, rechazar)=>{
        //return list
            
            //const messages = await model.find()
            model.find()
            .populate('users') // Campo que será vinculado y populado con datos de la otra collección 
            .exec((error, populated)=>{
                if(error){
                    rechazar("Error" + error)
                    return false
                }
                resolver(populated)
            })
    })
    
}

function addChat(chat){

    const myChat = new model(chat)
    myChat.save()

}


module.exports = {
    list: getChats,
    add: addChat
}