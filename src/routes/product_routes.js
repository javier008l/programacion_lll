const express = require('express')
const productSchema = require('../models/product_model')
const router = express.Router()
// Agregar un nuevo usuario

router.post('/product',(req,res)=>{
    const product = productSchema(req.body)
    product
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Listar los usuarios existentes en la BD
router.get('/products',(req,res)=>{
    productSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/products/:id',(req,res)=>{
    const {id} = req.params
    productSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Eliminar un recurso específico existente en la BD
router.delete('/products/:id',(req,res)=>{
    const {id} = req.params
    productSchema
    .remove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})
// Actualizar un recurso específico existente en la BD
router.put('/products/:id',(req,res)=>{
    const {id} = req.params
    const{product, price, cant, state} = req.body
    productSchema
        .updateOne({ _id: id },{$set:{product, price, cant, state}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
module.exports = router