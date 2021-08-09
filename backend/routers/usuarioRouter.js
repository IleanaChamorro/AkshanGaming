import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Usuario from '../modelos/modeloUsuario.js';


const usuarioRouter = express.Router();

usuarioRouter.get('/seed',
  expressAsyncHandler(async(req, res) => {
  await Usuario.remove({});
  const crearUsuarios = await Usuario.insertMany(data.usuarios);
  res.send({ crearUsuarios });
  })
);

export default usuarioRouter;