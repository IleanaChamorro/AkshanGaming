import Axios from 'axios';
import { CARRITO_AÑADIR_ITEM } from "../constantes/carritoConstantes";

export const añadirAlCarrito = (productoId, cantidad) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/productos/${productoId}`);
    dispatch({
        type: CARRITO_AÑADIR_ITEM,
        payload:{
            nombre: data.nombre,
            imagen: data.imagen,
            precio: data.precio,
            disponibilidadStock: data.disponibilidadStock,
            producto: data._id,
            cantidad,
        },
    });
    localStorage.setItem('carritoItems', JSON.stringify(getState().carrito.carritoItems));
};