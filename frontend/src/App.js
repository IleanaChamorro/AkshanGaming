import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PantallaCarrito from './pantallas/PantallaCarrito';
import PantallaInicio from './pantallas/PantallaInicio';
import ProductoPantalla from './pantallas/ProductoPantalla';
import Pantallaregistrarse from './pantallas/Pantallaregistrarse';
import { cerrarsesion } from './acciones/usuarioAcciones';

function App() {

    const carrito = useSelector((state) => state.carrito);
    const { carritoItems } = carrito;
    const usuarioRegistro = useSelector((state) => state.usuarioRegistro);
    const { usuarioInfo } = usuarioRegistro;
    const dispatch = useDispatch();

    //Acción Cerrar Sesión
    const desconectadoHandler = () => {
        dispatch(cerrarsesion());
    }

  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">
                    Akshan Gaming
                </Link>
            </div>
            <div>
                <Link to="/carrito">Carrito
                {carritoItems.length > 0 && (
                    <span className="contadoritems">{carritoItems.length}</span>
                )}
                </Link>
                {
                    usuarioInfo ? (
                        <div className="dropwdown"> 
                            <Link to="#">
                                {usuarioInfo.nombre} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                            <ul className="dropdown-content">
                                <Link to="#desconectado" onClick={desconectadoHandler}>Cerrar Sesión</Link>
                            </ul>
                        </div>
                    ) : 
                    (
                        <Link to="/registrarse">Registrarse</Link>
                    )}
            </div>
        </header>
    <main>
        <Route path="/carrito/:id?" component={PantallaCarrito}></Route>
        <Route path="/producto/:id" component={ProductoPantalla}></Route>
        <Route path="/registrarse" component={Pantallaregistrarse}></Route>
        <Route path="/" component={PantallaInicio} exact></Route>
        </main>
            <footer className="row center">
                Todos los derechos reservados
            </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
