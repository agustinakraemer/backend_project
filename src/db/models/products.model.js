import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        maxLength: 10
    },
    code:{
        type: Number,
        required: true,
        unique: true
    },
    stock:{
        type: Number,
        required: true,
    }
})

export const productosModel = mongoose.model('productos', productosSchema)