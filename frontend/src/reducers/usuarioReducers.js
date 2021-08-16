import { USUARIO_DESCONECTADO, USUARIO_REGISTRO_FAIL, USUARIO_REGISTRO_REQUEST, USUARIO_REGISTRO_SUCCESS } from '../constantes/usuarioConstantes.js';

export const usuarioRegistroReducer = (state = {}, action) => {
    switch (action.type){
        case USUARIO_REGISTRO_REQUEST:
            return { cargando: true};
        case USUARIO_REGISTRO_SUCCESS:
            return { cargando: false, usuarioInfo: action.payload };
        case USUARIO_REGISTRO_FAIL:
            return { cargando: false, error: action.payload };
        case USUARIO_DESCONECTADO:
            return {};
        default:
            return state
        }
}