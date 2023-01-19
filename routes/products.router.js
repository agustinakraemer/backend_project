import { Router } from "express";
import { ProductManager} from './src/app'

const router = Router()

const productManager = new ProductManager('products.json')

async function pruebaBuscar() {
    const product = await productManager.getProducts(10)
    console.log(product)
}

const products = pruebaBuscar()

router.get('/',(req,res)=>{
    res.json({products})
})

router.get('/:idProduct',(req,res)=>{
    const {idProduct} = req.params
    const product = products.find((c) => c.id === parseInt(idProduct))
    res.json({product})
})

router.post('/',(req,res)=>{
    const product = req.params
    products.push(product)
    res.json({message:'Producto agregado con éxito',product})
})

//para filtrar por query
/* router.get('/', async(req, res)=> {
    const {limit} = req.query
    const products = await productManager.getProducts(limit || 'max')
    res.json({products})
}) */
//para filtrar por ID
/* router.get('/:id', async(req, res)=> {
    const {id} = req.params
    const product = await productManager.getProductById(id)
    res.json({product})
}) */