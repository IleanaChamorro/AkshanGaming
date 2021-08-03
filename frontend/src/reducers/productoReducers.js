const { PRODUCTO_LISTA_FAIL, PRODUCTO_LISTA_REQUEST, PRODUCTO_LISTA_SUCCESS, PRODUCTO_DETALLES_REQUEST, PRODUCTO_DETALLES_SUCCESS, PRODUCTO_DETALLES_FAIL } = require ('../constantes/productoConstantes');

export const productoListaReducer  = (
    state = { cargando: true, productos: [] }, action) => {
    switch(action.type){
    case PRODUCTO_LISTA_REQUEST: 
        return {cargando: true};
    case PRODUCTO_LISTA_SUCCESS:
        return { cargando: false, productos: action.payload};
    case PRODUCTO_LISTA_FAIL:
        return { cargando: false, error: action.payload};
    default:
        return state;
    }
};

export const productoDetallesReducer = (state = {producto: {}, cargando: true}, action) =>{
    switch(action.type){
        case PRODUCTO_DETALLES_REQUEST:
            return{cargando: true};
        case PRODUCTO_DETALLES_SUCCESS:
            return { cargando: false, producto: action.payload};
        case PRODUCTO_DETALLES_FAIL:
            return { cargando: false, error: action.payload};
        default:
            return state;
    }
};
