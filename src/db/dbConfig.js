import mongoose from "mongoose";

const URL = 'mongodb+srv://CoderAgus:03034560mongo@codercluster.gklwvoc.mongodb.net/BackendStore?retryWrites=true&w=majority'

mongoose.set('strictQuery', true) //para que no tire ningun error
mongoose.connect(URL,(error)=> {
    if (error) {
        console.log('Error de conexión a base de datos.', error);
    } else {
        console.log('Conectado a la base de datos Mongoose.');
    }
    })
    
    