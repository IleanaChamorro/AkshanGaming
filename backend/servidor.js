import express from 'express';
import data from './data.js';

const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log( `Servidor funcionando en http://localhost:${PORT}`);
});
