import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/productos', (req,res) => {
    res.send(data.productos);
});
app.get('/', (req, res) => {
    res.send('Servidor Listo')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Servidor funcionando en http://localhost:5000');
});
