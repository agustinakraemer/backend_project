import express from 'express'
import { Server } from 'socket.io'
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

/* app.get('/',(req, res)=>{
    res.render('realTimeProducts')
}) */
app.get('/productos',(req, res)=>{
    res.render('home',{products})
})

  
app.post("/", (req, res) => {
    const productToAdd = req.body;
    const newProduct = productsRouter.addProduct(productToAdd);
});
  
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    productsRouter.deleteProduct(parseInt(id));
    res.json({ message: "producto eliminado con éxito" });
});

app.get("/realtimeproducts", async (req, res) => {
    const { limit } = req.query;
    const products = await productsRouter.getProducts(limit || "all");
    res.render("Productos cargados hasta el momento", { products });
  });
 
//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

//realtime
app.get('/', async (req, res) => {
    const { limit } = req.query;
    const products = await productsRouter.getProducts(limit || "all");
    res.render('index', { products });
  });

const PORT = 8080

const httpServer = app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}.`)
})

// Socket
const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log('usuario conectado', socket.id)
    socket.on('disconnect',()=>{
        console.log('usuario desconectado')
    });

    socket.on('deleteProduct', async (id) => {
        await productsRouter.deleteProduct(parseInt(id));
        const products = await productsRouter.getProducts();
        socket.emit('deleteProduct', products);
      });
    
      socket.on('addProduct', async (obj) => {
        await productsRouter.addProduct(obj);
        const products = await productsRouter.getProducts();
        socket.emit('addProduct', products);
      });
})


