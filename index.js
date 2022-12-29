const fs = require('fs')
const rutaProducts = 'products.json'

class ProductManager {

    constructor() {
        this.productos = rutaProducts;
    }

    async consultProduct () {
        try {
            if(fs.existsSync(rutaProducts)){
                const infoProducts = await fs.promises.readFile(rutaProducts, 'utf-8')
                const infoProductsJS = JSON.parse(infoProducts)
                return infoProductsJS
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    async addProduct (title, description, price, thumbnail, code, stock){
        try {
            if(title && description && price && thumbnail && code && stock ){
                const codeYaExiste = this.productos.some(
                    (product) => product.code === code
                );
                if (!codeYaExiste){
                    await this.consultProduct()
                    const product = {
                        id: this.#generarId(),
                        title,
                        description, 
                        price, 
                        thumbnail, 
                        code, 
                        stock,
                    }
                    productos.push(product)
                    await fs.promises.writeFile(rutaProducts, JSON.stringify(this.productos))
                } else {
                    console.log("Ya existe ese código.");
                }
            } else {
                    console.log("Se deben completar todos los campos.");
                };
        } catch (error) {
            console.log(error)
        }
        
    }
    #generarId() {
        let id = this.productos.length === 0 ? 1 : this.productos[this.productos.length - 1].id + 1
        return id;
    }
    async deleteProduct(id){
        const deleteProductId = this.productos.find((product) => product.id === id);
        fs.unlinkSync(deleteProductId)
    }
    async updateProduct(id) {
        const updateProductId = this.productos.find((product) => product.id === id);
        fs.writeFile(updateProductId)

    }
    getProducts() {
        return JSON.parse(this.productos);
    }

    getProductById(id) {
        return this.productos.find((product) => product.id === id);
    }
}



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