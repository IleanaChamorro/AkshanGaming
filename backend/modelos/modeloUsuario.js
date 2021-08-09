import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
    esAdmin: { type: Boolean, default: false, required: true},
}, 
    {
        timestamps: true
    }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;