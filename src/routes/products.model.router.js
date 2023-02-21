import { Router } from "express";
import { productosModel } from "../db/models/products.model.js";

const productsModelRouter = Router()

productsModelRouter.get('/', async (req,res) =>{
    try {
        const productos = await productosModel.find({})
        res.send('Buscar todos')
        if(productos.length!==0){
            res.json({message: 'Todos los productos', productos})
        } else {
            res.send('No hay producto en la base de datos')
        }
    } catch (error) {
        console.log(error);
    }
})

//buscar por ID
productsModelRouter.get('/idProducto', async (req,res) =>{
    try {
        const {idProducto} = req.params
        const producto = await productosModel.findById({idProducto})
        if(producto){
            res.json({message: 'El producto existe', producto})
        } else {
            res.send('No hay un producto con ese ID')
        }
    } catch (error) {
    console.log(error);
    }
})

//agregar producto
productsModelRouter.post('/productos', async (req,res) =>{
    try {
        const productObj = req.body
        const nuevoProducto = await productosModel.create({productObj})
        console.log(nuevoProducto);
        res.send({message:'Producto Agregado',producto:nuevoProducto})
    } catch (error) {
        console.log(error);
    }
})

//eliminar producto
productsModelRouter.delete('/idProducto', async (req,res) =>{
    try {
        const {idProducto} = req.params
        const productoEliminado = await productosModel.findByIdAndDelete({idProducto})
        res.json({message:'Producto eliminado con éxito',producto:productoEliminado})
    } catch (error) {
        console.log(error);
    }
})

export default productsModelRouter;