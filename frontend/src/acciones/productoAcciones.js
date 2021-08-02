import Axios from "axios";
import { PRODUCTO_LISTA_FAIL, PRODUCTO_LISTA_REQUEST, PRODUCTO_LISTA_SUCCESS } from '../constantes/productoConstantes.js';
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