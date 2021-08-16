import Axios from 'axios';
import { USUARIO_DESCONECTADO, USUARIO_REGISTRO_FAIL, USUARIO_REGISTRO_REQUEST, USUARIO_REGISTRO_SUCCESS } from '../constantes/usuarioConstantes.js';

export const registro = (email, contraseña) => async(dispatch) => {
    dispatch({type: USUARIO_REGISTRO_REQUEST, payload: { email, contraseña} });
    try{
        const { data } = await Axios.post('/api/usuarios/registro', {email, contraseña});
        dispatch({ type: USUARIO_REGISTRO_SUCCESS, payload: data});
        localStorage.setItem('usuarioInfo', JSON.stringify(data));
    } catch(error){
        dispatch({ type: USUARIO_REGISTRO_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};

export const cerrarsesion = () => (dispatch) => {
    localStorage.removeItem('usuarioInfo');
    localStorage.removeItem('carritoItems');
    dispatch({ type: USUARIO_DESCONECTADO });
}