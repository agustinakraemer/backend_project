import { application, Router } from "express";
import { CartManager} from './src/app'

const router = Router()

const cartManager = new CartManager('cart.json')

async function traerCarrito() {
    const carrito = await cartManager.getCarrito(10)
    console.log(carrito)
}

const carritos = traerCarrito()

router.get('/',(req,res)=>{
    res.json({carritos})
})
router.get('/:idCarrito',(req,res)=>{
    const {idCarrito} = req.params
    const carrito = carritos.find((c) => c.id === parseInt(idCarrito))
    res.json({carrito})
})

router.post('/',(req,res)=>{
    const carrito = req.body
    carritos.push(carrito)
    res.json({message:'Producto agregado al carrito',carrito})
})

app.post('/:idCarrito/products/:idProduct', (req,res)=> {
    const {idCarrito, idProducto} = req.params
    const carrito = carritos.find((c) => c.id === parseInt(idCarrito))
    const producto = productos.find((p)=>p.id === parseInt(idProducto))
    if (producto) {
        res.send('El producto ya existe')
    }
    const index = carrito.productos.findIndex((p)=>p.producto === parseInt(idProducto))
    if (index === -1) {
        carrito.productos.push({producto: parseInt(idProducto), qty:1 })
    } else {
        carrito.productos[index].qty++
    }
})

export default router;