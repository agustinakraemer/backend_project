import express from 'express'
/* import handlebars from 'express-handlebars' */
import productsRouter from './src/routes/products.router.js'
import cartRouter from './src/routes/cart.router.js'
//dirname
/* import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url)) */
//-------
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//handlebars
/* app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views') */

/* app.get('/',(req, res)=>{
    res.render('vista1')
})
app.get('/vista2',(req, res)=>{
    res.render('vista2')
}) */

//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}.`)
})