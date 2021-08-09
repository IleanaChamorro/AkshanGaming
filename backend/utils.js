import jwt from 'jsonwebtoken';

//Generar Token al Ingresar
export const generateToken = (usuario) => {
    return jwt.ingresar(
    {
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        esAdmin: usuario.esAdmin,
    },
    process.env.JWT_SECRET || 'algosecreto',
    //Tiempo para utilizar Token
    {
        expiresIn: '30d',
    }
    );
};