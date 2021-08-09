import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js'
import Producto from '../modelos/productoModelo.js';

const productoRouter = express.Router();

productoRouter.get('/' , expressAsyncHandler(async (req,res) => {
  const productos = await Producto.find({});
  res.send(productos);
 }) 
);

productoRouter.get(
    '/seed',
    expressAsyncHandler(async(req, res) => {
     await Producto.remove({});
      const crearProducto = await Producto.insertMany(data.productos);
    res.send({ crearProducto });
  }) 
);

productoRouter.get('/:id', expressAsyncHandler(async(req,res) => {
    const producto = await Producto.findById(req.params.id);
    if(producto){
      res.send(producto);
    }
    else{
      res.status(404).send({ message: 'Lo sentimos :( . El Producto no fue encontrado'})
    }
}))
export default productoRouter;