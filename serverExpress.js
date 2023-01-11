import express from 'express'
import { ProductManager} from './src/app.js'

const app = express()
const productManager = new ProductManager('products.json')

//para filtrar por query
app.get('/productos', async(req, res)=> {
    const {limit} = req.query
    const products = await productManager.getProducts(limit || 'max')
    res.json({products})
})
//para filtrar por ID
app.get('/productos/:id', async(req, res)=> {
    const {id} = req.params
    const product = await productManager.getProductById(id)
    res.json({product})
})

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})