import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { carritoReducer } from './reducers/carritoReducers.js';
import { productoDetallesReducer, productoListaReducer } from './reducers/productoReducers.js';
import { usuarioRegistroReducer } from './reducers/usuarioReducers';

const initialState = {
    usuarioRegistro: {
        usuarioInfo: localStorage.getItem('usuarioInfo')
        ? JSON.parse(localStorage.getItem('usuarioInfo'))
        : null,
    },
    carrito: {
        carritoItems: localStorage.getItem('carritoItems') 
        ? JSON.parse(localStorage.getItem('carritoItems'))
        : [],
    }
};
const reducer = combineReducers({
    productoLista: productoListaReducer,
    productoDetalles: productoDetallesReducer,
    carrito: carritoReducer,
    usuarioRegistro: usuarioRegistroReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;