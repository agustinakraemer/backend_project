import { Router } from "express";
import { productosModel } from "../db/models/products.model";

const productsModelRouter = Router()

productsModelRouter.get('/', async (req,res) =>{
    const products = await productosModel.find({})
    res.send('Buscar todos')
    if(products.length!==0){
        res.json({message: 'Todos los productos', products})
    } else {
        res.send('No hay producto en la base de datos')
    }
})

//buscar por ID
productsModelRouter.get('/IdProduct', async (req,res) =>{
    const {idProduct} = req.params
    const product = await productosModel.findById({idProduct})
    if(product){
        res.json({message: 'El producto existe', product})
    } else {
        res.send('No hay un producto con ese ID')
    }
})

//agregar un estudiante
productsModelRouter.post('/productos', async (req,res) =>{
    const productObj = req.body
    const nuevoProduct = await productosModel.create({productObj})
    console.log(nuevoProduct);
    res.send('Producto Agregado')
})

export default productsModelRouter;