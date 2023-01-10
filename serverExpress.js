import express from 'express'
import { ProductManager} from './index.js'

const app = express()
const productManager = new ProductManager('products.json')

app.get('/productos', async(req, res)=> {
    const products = await productManager.getProductById(3)
    res.json(products)
})


const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})