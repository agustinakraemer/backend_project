import { Router } from "express";

const router = Router()

const carts = []

router.get('/',(req,res)=>{
    res.json({carts})
})

router.post('/',(req,res)=>{
    const cart = req.body
    carts.push(pet)
    res.json({message:'Producto agregado al carrito',cart})
})


export default router;