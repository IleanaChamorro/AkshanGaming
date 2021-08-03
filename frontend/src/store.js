import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { productoDetallesReducer, productoListaReducer } from './reducers/productoReducers.js'

const initialState = {};
const reducer = combineReducers({
    productoLista: productoListaReducer,
    productoDetalles: productoDetallesReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;