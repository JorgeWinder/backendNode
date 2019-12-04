exports.success = function(req, res, mensaje, status){
    res.status(status || 200).send({
        error: '',
        body: mensaje
        })
}

exports.error = function(req, res, mensaje, status, details){
    console.error
    res.status(status || 500).send({
        error: mensaje,
        body: ''
        })

}