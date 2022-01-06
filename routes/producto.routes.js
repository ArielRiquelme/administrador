const productoController = require('../controllers/producto.controller');
module.exports = (app) => {
    app.get("/api/producto/", productoController.mostrarProductos);
    app.get("/api/producto/:id", productoController.mostrarUnProducto);
    app.put("/api/producto/update/:id", productoController.updateProducto);
    app.delete("/api/producto/delete/:id", productoController.borrarProducto);
    app.post("/api/producto/new", productoController.crearProducto);
};