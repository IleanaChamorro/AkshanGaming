import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true},
    imagen: { type: String, required: true},
    marca: { type: String, required: true},
    categoria: { type: String, required: true},
    descripcion: { type: String, required: true},
    precio: { type: Number, required: true},
    disponibilidadStock: { type: Number, required: true},
    numReseñas: { type: Number, required: true},
}, {
    timestamps: true,
  }
);

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;