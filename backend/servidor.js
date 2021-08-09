import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuarioRouter from './routers/usuarioRouter.js';
import productoRouter from './routers/productoRouter.js'; 

dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/AkshanGaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Usuarios 
app.use('/api/usuarios', usuarioRouter);

//Productos
app.use('/api/productos', productoRouter);

app.get('/', (req, res) => {
    res.send('Servidor Listo')
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log( `Servidor funcionando en http://localhost:${PORT}`);
});
