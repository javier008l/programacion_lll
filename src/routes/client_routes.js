const express = require('express')
const clientSchema = require('../models/client_model')
const router = express.Router()
// Agregar un nuevo usuario

router.post('/client',(req,res)=>{
    const client = clientSchema(req.body)
    client
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Listar los usuarios existentes en la BD
router.get('/clients',(req,res)=>{
    clientSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/clients/:id',(req,res)=>{
    const {id} = req.params
    clientSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Eliminar un recurso específico existente en la BD
router.delete('/clients/:id',(req,res)=>{
    const {id} = req.params
    clientSchema
    .remove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})
// Actualizar un recurso específico existente en la BD
router.put('/clients/:id',(req,res)=>{
    const {id} = req.params
    const{name,lastname,address,account_bank} = req.body
    clientSchema
        .updateOne({ _id: id },{$set:{name,lastname,address,account_bank}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
module.exports = router