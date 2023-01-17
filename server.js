import express from 'express'
import { ProductManager} from './src/app.js'
import productsRouter from './routes/products.router'
import cartRouter from './routes/cart.router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const productManager = new ProductManager('products.json')

//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}.`)
})