import fs from 'fs';

export class ProductsController {

    constructor(path) {
        this.path = path;
    }

    async getProducts(limit) {
        try {
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, 'utf-8')
               /*  const infoProductsJS = JSON.parse(infoProducts) */
               if(limit === 'max'){
                return JSON.parse(products)
               } else {
                return JSON.parse(products).slice(0,limit)
               }
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    async addProduct (title, description, price, thumbnail, code, stock){
        const product = {
            id: await this.#generarId(),
            title,
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
        }
        const products = await this.getProducts()
        products.push(product)
        await fs.promises.writeFile(this.path, JSON.stringify(products))
    }

    async #generarId() {
        const products = await this.getProducts()
        let id = products.length === 0 ? 1 : products[products.length - 1].id + 1
        return id;
    }
    async deleteProduct(id){
        const products = await this.getProducts()
        const deleteProductId = this.productos.find((product) => product.id === id);
        fs.unlinkSync(rutaProducts, deleteProductId)
    }
    async updateProduct(id, campo) {
        if(id && title && description && price && thumbnail && code && stock){
            const products = await this.getProducts()
            const updateProductId = this.productos.find((product) => product.id === id);
            fs.writeFile(rutaProducts, campo)
        }
    }

    async getProductById(id) {
        const products = await this.getProducts()
        const producto = products.find((product) => product.id === parseInt(id))
        if (producto){
            return producto
        } else {
            return 'producto no existe'
        }
    }
}
