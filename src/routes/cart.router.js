import { application, Router } from "express";
import { CartController } from '../controllers/cartController'

const router = Router()

const cartController = new CartController('cart.json')

router.get('/', cartController.getCarrito(req, res))

router.get('/:idCarrito', cartController.itemId(req, res))

router.post('/:idCarrito/products/:idProduct', cartController.addItem(req, res))

router.delete('/delete/:idCarrito', cartController.deleteProductCarrito(req, res))


export default cartRouter;




/* router.get('/:idCarrito',(req,res)=>{
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
}) */