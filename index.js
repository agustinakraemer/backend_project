class ProductManager {

    constructor (){
        this.productos = []
    }
    addProduct (id, title, description, price, thumbnail, code, stock){
        const producto = {
            id: this.#generarId(),
            title,
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        }
        this.productos.push(producto)
    }
    #generarId(){
        let id = this.productos.length === 0 ? 1 : this.productos[this.productos.length - 1].id + 1
        return id
    }

    getProducts(){
        return this.productos
    }

    getProductById(id){
        if (this.producto.id === id){
            return this.producto
        } else {
            console.log("Not found")
        }
    }
}

const productManager = new ProductManager()
console.log(tickets.getProducts())
console.log(productos)


