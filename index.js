class ProductManager {

    constructor() {
        this.productos = [];
    }

    addProduct (title, description, price, thumbnail, code, stock){
        const producto = {
            id: this.#generarId(),
            title,
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        }
        this.productos.push(producto);
    }
    #generarId() {
        let id = this.productos.length === 0 ? 1 : this.productos[this.productos.length - 1].id + 1
        return id;
    }

    getProducts() {
        return this.productos;
    }

    getProductById(id) {
        let productId = this.productos.find(this.producto.id === id)
        if (productId != ''){
            return this.producto;
        } else {
            console.log("Not found")
        }
    }
}

const productManager = new ProductManager()
productManager.addProduct ('Producto1', '23cm x 28cm', '1500', 'imagen', '435', '30')
console.log(productManager)


