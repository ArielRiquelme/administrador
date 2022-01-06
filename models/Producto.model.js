const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
	nombre: String,
	precio: Number,
    descripcion: String
});

const productoModel = mongoose.model("producto", ProductoSchema);

module.exports = productoModel;