 import { Router } from "express";


const viewsRouter = Router();

viewsRouter.get('/registro',(req,res)=>{
    res.render('registro')
})
export default viewsRouter;
