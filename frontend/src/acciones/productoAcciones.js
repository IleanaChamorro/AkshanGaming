import Axios from "axios";
import { PRODUCTO_DETALLES_FAIL, PRODUCTO_DETALLES_REQUEST, PRODUCTO_DETALLES_SUCCESS, PRODUCTO_LISTA_FAIL, PRODUCTO_LISTA_REQUEST, PRODUCTO_LISTA_SUCCESS } from '../constantes/productoConstantes.js';

export const listaProductos = () => async (dispatch) =>{
    dispatch({
        type: PRODUCTO_LISTA_REQUEST
    });
    try{
        const { data } = await Axios.get('/api/productos');
        dispatch({type: PRODUCTO_LISTA_SUCCESS, payload: data});
    }catch(error){
        dispatch({type:PRODUCTO_LISTA_FAIL, payload:error.message});
    }
};

export const detallesProducto = (productoId) => async(dispatch) =>{
    dispatch({type: PRODUCTO_DETALLES_REQUEST, payload: productoId});
    try{
        const {data} = await Axios.get(`/api/productos/${productoId}`);
        dispatch({type: PRODUCTO_DETALLES_SUCCESS, payload: data });
    }catch(error){
        dispatch({
        type: PRODUCTO_DETALLES_FAIL, 
        payload:
         error.response && error.response.data.message 
         ? error.response.data.message
         : error.message,
    });
  }
};