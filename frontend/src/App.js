import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PantallaCarrito from './pantallas/PantallaCarrito';
import PantallaInicio from './pantallas/PantallaInicio';
import ProductoPantalla from './pantallas/ProductoPantalla';

function App() {

    const carrito = useSelector((state) => state.carrito);
    const { carritoItems } = carrito;

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
                <Link to="/registrarse">Registrarse</Link>
            </div>
        </header>
    <main>
        <Route path="/carrito/:id?" component={PantallaCarrito}></Route>
        <Route path="/producto/:id" component={ProductoPantalla}></Route>
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
