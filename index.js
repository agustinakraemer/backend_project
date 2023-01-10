/* const fs = require('fs') */
import fs from 'fs';

export class ProductManager {

    constructor(path) {
        this.path = path;
    }

    async getProducts() {
        try {
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, 'utf-8')
               /*  const infoProductsJS = JSON.parse(infoProducts) */
                return JSON.parse(products)
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
        const producto = products.find((product) => product.id === id)
        if (producto){
            return producto
        } else {
            return 'producto no existe'
        }
    }
}

// para probar
const productManager = new ProductManager('products.json')

async function pruebaAgregar() {
    await productManager.addProduct('Producto4', '25cm x 50cm', '1000', 'imagen', '200','4')
}
async function pruebaBuscar() {
    const product = await productManager.getProducts(3)
    console.log(product)
}



/* async consultProduct () {
        try {
            if(fs.existsSync(this.path)){
                const infoProducts = await fs.promises.readFile(this.path, 'utf-8')
               
                return JSON.parse(infoProducts)
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    } */

    /* async addProduct (title, description, price, thumbnail, code, stock){
        try {
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
                    const products = await this.getProducts()
                    products.push(product)
                    await fs.promises.writeFile(this.path, JSON.stringify(products))
                } else {
                    console.log("Ya existe ese código.");
                }
            } else {
                    console.log("Se deben completar todos los campos.");
                };
        } catch (error) {
            console.log(error)
        }
        
    } */

/* class ProductManager {

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
        return this.productos.find((product) => product.id === id);
    }
} */

/* const productManager = new ProductManager()
productManager.addProduct ('Producto1', '23cm x 28cm', '1500', 'imagen', '435','30')
productManager.addProduct ('Producto2', '29cm x 32cm', '2000', 'imagen', '431', '50')
console.log(productManager) */


// node JS

/* const fs = require('fs')
const rutaUsuario = 'Usuario.json'
class ManagerUsuarios {
    async consultarUsuarios(){
        try {
            if(fs.existsSync(rutaUsuario)){
                const infoUsuarios = await fs.promises.readFile(rutaUsuario, 'utf-8')
                const infoUsuariosJS = JSON.parse(infoUsuarios)
                return infoUsuariosJS
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }
    async crearUsuario(usuario) {
        try {
            const usuario = await this.consultarUsuarios()
            usuarios.push(usuario)
            await fs.promises.writeFile(rutaUsuario, JSON.stringify(usuarios))
        } catch (error) {
            console.log(error)
        }
    }
}
const manager = new ManagerUsuarios()
async function prueba() {
    const consultaUsuarios = await manager.consultarUsuarios()
    console.log(consultaUsuarios)
}
const usuario1 = {
    nombre: 'Juan',
    apellido:'Escola',
    edad: 35,
    curso:'Backend'
}
prueba() */
//sync
//escirbir
/* fs.writeFileSync('primerArchivo.txt','Mi primer archivo') */

//leer
/* const info = fs.readFileSync('primerArchivo.txt','uft-8')
console.log(info) */

//eliminar
/* fs.unlinkSync('primerArchivo.txt') */

//agregar
/* if(fs.existsSync('./archivos/ejemplo.txt')){
    console.log('Existe el archivo')
} else {
    console.log('No existe el archivo')
} */

//ejemplo para crear archivo y que no se repita la info
/* if(fs.existsSync('./archivos/ejemplo.txt')){
    const info = fs.readFileSync('./archivos/ejemplo.txt', 'utf-8')
    console.log(info)
    fs.appendFileSync('./archivos/ejemplo.txt','Agregando info')
} else {
    fs.writeFileSync('./archivos/ejemplo.txt','Primer ejemplo')
} */


//ejemplo ASYNC
/* const ruta = './archivos/ejemploCB.txt'
if(fs.existsSync(ruta)){
    const info = fs.readFile(ruta, 'utf-8',(error, info) =>{
        if (error) {
            console.log(error)
        } else {
            console.log(info)
            fs.appendFile(ruta,'Nueva info en CB', (error) => {
                if (error) {
                    console.log(error)
                } else {
                    fs.readFile(ruta, 'utf-8', (error, info) => {
                        if (error) {
                            console.log(error)
                        } else {
                            console.log(info)
                            fs.unlink(ruta, (error)=>{
                                if(error){
                                    console.log(error)
                                } else {
                                    console.log('Archivo eliminado con éxito')
                                }
                            })
                        }
                    })
                }
            })
        }
    })
} else {
    fs.writeFile(ruta, 'Ejemplo CB', (error)=>{
        if (error) {
            console.log(error)
        } else {
            console.log('Archivo creado con éxito')
        }
    })
} */