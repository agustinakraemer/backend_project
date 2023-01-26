import express from 'express'
import handlebars from 'express-handlebars' 
import productsRouter from './src/routes/products.router.js'
import cartRouter from './src/routes/cart.router.js'
//dirname
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
//-------
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views') 

const products = 
    [
    {id:1,title:"Producto1",description:"23cm x 28cm",price:"1500",thumbnail:"imagen",code:"435",stock:"30"},
    {id:2,title:"Producto2",description:"25cm x 26cm",price:"300",thumbnail:"imagen",code:"458",stock:"5"},
    {id:3,title:"Producto3",description:"25cm x 26cm",price:"600",thumbnail:"imagen",code:"300",stock:"20"},
    {id:4,title:"Producto4",description:"25cm x 50cm",price:"1000",thumbnail:"imagen",code:"200",stock:"4"},
    {id:5,title:"Producto5",description:"27cm x 30cm",price:"1500",thumbnail:"imagen",code:"250",stock:"80"}
]

app.get('/',(req, res)=>{
    res.render('vista2')
})
app.get('/productos',(req, res)=>{
    res.render('home',{products})
})

/* app.get('/vista2',(req, res)=>{
    res.render('vista2')
})  */

//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}.`)
})