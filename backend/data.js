//Lista de productos con sus respectivos detalles 
import bcrypt from 'bcryptjs';

const data = {
    usuarios: [
        {
            nombre: 'Adra',
            email: 'admin@mail.com',
            contraseña: bcrypt.hashSync('1234', 8),
            esAdmin: true,
        },
        {
            nombre: 'Ileana',
            email: 'usuario@mail.com',
            contraseña: bcrypt.hashSync('1234', 8),
            esAdmin: false,
        },
    ],
    productos:[
        {
            _id:'1',
            nombre: 'MotherBoard Asus Prime A320m-k',
            categoria: 'Acc. Computacion',
            imagen: '/imagenes/motherboard.jpg',
            precio: 7100,
            marca: 'ASUS PRIME',
            numReseñas: 6,
            descripcion: 'Intel® Socket 1151 for 9th / 8th Generation Core i7/Core i5/Core i3/Pentium®/Celeron® Processors',
            disponibilidadStock: 5,
        },
        {
            _id:'2',
            nombre: 'Teclado Multimedia DELL',
            categoria: 'Acc. Computacion',
            imagen: '/imagenes/teclado.jpg',
            precio: 3974,
            marca: 'DELL',
            numReseñas: 10,
            descripcion: 'Teclado Inalambrico DELL KM636',
            disponibilidadStock: 5,
        },
        {
            _id:'3',
            nombre: 'Auriculares Gamer Inalámbricos',
            categoria: 'Acc. Computacion',
            imagen: '/imagenes/auriculares.jpeg',
            precio: 16999,
            marca: 'HyperX',
            numReseñas: 10,
            descripcion: 'Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED',
            disponibilidadStock: 5,
        },
        {
            _id:'4',
            nombre: 'Monitor Gamer Samsung',
            categoria: 'Acc. Computacion',
            imagen: '/imagenes/monitor.jpg',
            precio: 24990,
            marca: 'Samsung',
            numReseñas: 10,
            descripcion: 'Un monitor a tu medida, Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas  a ver colores nítidos y definidos en tus películas o series favoritas.',
            disponibilidadStock: 5,
        },
        {
            _id:'5',
            nombre: 'Pc Armada Dual Core',
            categoria: 'Acc. Computacion',
            imagen: '/imagenes/pcarmada.jpg',
            precio: 18699,
            marca: 'INTEL AMD',
            numReseñas: 10,
            descripcion: 'PC ARMADA DUAL CORE',
            disponibilidadStock: 5,
        },
    ],
};

export default data;