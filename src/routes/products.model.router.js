import { Router } from "express";
import { productosModel } from "../db/models/products.model";

const productsModelRouter = Router()

productsModelRouter.get('/', async (req,res) =>{
    const productos = await productosModel.find({})
    res.send('Buscar todos')
    if(productos.length!==0){
        res.json({message: 'Todos los productos', productos})
    } else {
        res.send('No hay producto en la base de datos')
    }
})

//buscar por ID
productsModelRouter.get('/IdProducto', async (req,res) =>{
    const {idProducto} = req.params
    const product = await productosModel.findById({idProducto})
    if(producto){
        res.json({message: 'El producto existe', producto})
    } else {
        res.send('No hay un producto con ese ID')
    }
})

//agregar un estudiante
productsModelRouter.post('/productos', async (req,res) =>{
    const productObj = req.body
    const nuevoProducto = await productosModel.create({productObj})
    console.log(nuevoProducto);
    res.send('Producto Agregado')
})

export default productsModelRouter;