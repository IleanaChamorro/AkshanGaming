import { CARRITO_AÑADIR_ITEM, CARRITO_REMOVER_ITEM } from "../constantes/carritoConstantes";

export const carritoReducer = (state = { carritoItems: [] }, action) => {
    switch (action.type) {
        case CARRITO_AÑADIR_ITEM:
        const item = action.payload;
        const existeItem = state.carritoItems.find((x) => x.producto === item.producto);
        if(existeItem){
            return{
                ...state,
                carritoItems: state.carritoItems.map((x) => x.producto === existeItem.producto ? item : x),
            };
        } else {
            return { ...state, carritoItems: [...state.carritoItems, item ] };
        }
        case CARRITO_REMOVER_ITEM:
            return{ 
            ...state,
             carritoItems: state.carritoItems.filter((x) => x.producto !== action.payload),
            };
        default:
            return state;
    }
};