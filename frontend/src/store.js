import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { carritoReducer } from './reducers/carritoReducers.js';
import { productoDetallesReducer, productoListaReducer } from './reducers/productoReducers.js'

const initialState = {
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
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;