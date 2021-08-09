import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import Usuario from '../modelos/modeloUsuario.js';
import { generateToken } from '../utils.js';


const usuarioRouter = express.Router();

usuarioRouter.get('/seed',
  expressAsyncHandler(async(req, res) => {
  //await Usuario.remove({});
  const crearUsuarios = await Usuario.insertMany(data.usuarios);
  res.send({ crearUsuarios });
  })
);

usuarioRouter.post('/registrarse', expressAsyncHandler(async (req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email});
    if(bcrypt.compareSync(req.body.password, usuario.contraseña)){
      res.send({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        esAdmin: usuario.esAdmin,
        token: generateToken(usuario),
      });
      return;
    }
    res.status(401).send({ message: 'Email o Contraseña Incorrecta'})
  })
); 
export default usuarioRouter;