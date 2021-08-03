import { CARRITO_AÑADIR_ITEM } from "../constantes/carritoConstantes";

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
        default:
            return state;
    }
};