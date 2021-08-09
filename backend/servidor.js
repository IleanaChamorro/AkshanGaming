import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import usuarioRouter from './routers/usuarioRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/AkshanGaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/usuarios', usuarioRouter);
app.get('/api/productos/:id', (req, res) => {
    const producto = data.productos.find(x => x._id === req.params.id);
    if(producto){
        res.send(producto);
    }else{
        res.status(400).send({message: 'Lo sentimos, Este producto no existe'});
    }
});
app.get('/api/productos', (req,res) => {
    res.send(data.productos);
});

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
