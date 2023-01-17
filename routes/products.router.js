import { Router } from "express";

const router = Router()

const products = []

router.get('/',(req,res)=>{
    res.json({products})
})

router.post('/',(req,res)=>{
    const product = req.body
    products.push(pet)
    res.json({message:'Producto agregado con éxito',product})
})

export default router;

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