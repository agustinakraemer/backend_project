class ProductManager {

    constructor() {
        this.productos = [];
    }

    addProduct (title, description, price, thumbnail, code, stock){
        if(title && description && price && thumbnail && code && stock ){
            const codeYaExiste = this.productos.some(
                (product) => product.code === code
            );
            if (!codeYaExiste){
                const product = {
                    id: this.#generarId(),
                    title,
                    description, 
                    price, 
                    thumbnail, 
                    code, 
                    stock,
                }
                this.productos.push(product);
            } else {
                console.log("Ya existe ese código.");
            }
        } else {
            console.log("Se deben completar todos los campos.");
        }
        
    }
    #generarId() {
        let id = this.productos.length === 0 ? 1 : this.productos[this.productos.length - 1].id + 1
        return id;
    }
    #codigoId (){
    }
    getProducts() {
        return this.productos;
    }

    getProductById(id) {
        let productId = this.productos.find(this.producto.id === id)
        if (productId){
            return this.product;
        } else {
            console.log("Not found")
        }
    }
}

const productManager = new ProductManager()
productManager.addProduct ('Producto1', '23cm x 28cm', '1500', 'imagen', '435','30')
productManager.addProduct ('Producto2', '29cm x 32cm', '2000', 'imagen', '431', '50')
console.log(productManager)



