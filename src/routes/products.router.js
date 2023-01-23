import { Router } from "express";
import { ProductsController } from '../controllers/productsController.js'

const router = Router()

const productsController = new ProductsController('products.json')

router.get('/',productsController.getProducts(req,res))

router.get('/:idProduct',productsController.getProductById(req,res))

router.put('/update/:id', productsController.updateProduct(req,res))

router.delete('/delete/:id', productsController.deleteProduct(req,res))

export default productsRouter;



/* router.get('/',(req,res)=>{
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
}) */

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