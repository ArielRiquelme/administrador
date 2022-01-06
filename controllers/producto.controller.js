const ProductoModel = require("../models/Producto.model");

module.exports.crearProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion } = req.body;
    const doc = await ProductoModel.create({
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
    });

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "No fue posible crear " + e.message });
  }
};

module.exports.mostrarProductos = (req, res) => {
  ProductoModel.find()
    .then((allProductos) => res.json({ producto: allProductos }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.mostrarUnProducto = (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  ProductoModel.findOne({ nombre })
    .then((unProducto) => res.json({ producto: unProducto }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateProducto = (req, res) => {
  ProductoModel.findOneAndUpdate({ nombre: req.params.nombre }, req.body, { new: true })
    .then((updateProducto) => res.json({ producto: updateProducto }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.borrarProducto = (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  ProductoModel.deleteOne({ nombre })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
