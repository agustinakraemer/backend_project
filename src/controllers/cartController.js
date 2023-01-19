import fs from 'fs';

class CartController {

    constructor(path) {
        this.path = path;
    }

    async getCarrito(limit) {
        try {
            if(fs.existsSync(this.path)){
                const carritos = await fs.promises.readFile(this.path, 'utf-8')
               if(limit === 'max'){
                return JSON.parse(carritos)
               } else {
                return JSON.parse(carritos).slice(0,limit)
               }
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    async addItem (){
        const carrito = {
            id,
            productos: [
                product,
                qty
            ]
        }
        const carritos = await this.getCarrito()
        carritos.push(carrito)
        await fs.promises.writeFile(this.path, JSON.stringify(carritos))
    }

    async itemId(id) {
        const carritos = await this.getCarrito()
        const carrito = carritos.find((carrito) => carrito.id === parseInt(id))
        if (carrito){
            return carrito
        } else {
            return 'producto no existe'
        }
    }

    async deleteProductCarrito(id){
        const carritos = await this.getCarrito()
        const deleteProductCarrito = this.carritos.find((carrito) => carrito.id === id);
        fs.unlinkSync(carritos, deleteProductCarrito)
    }
}

export default CartController;