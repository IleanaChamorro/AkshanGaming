import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PantallaInicio from './pantallas/PantallaInicio';
import ProductoPantalla from './pantallas/ProductoPantalla';

function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">
                    Akshan Gaming
                </a>
            </div>
            <div>
                <a href="/carrito">Carrito</a>
                <a href="/registrarse">Registrarse</a>
            </div>
        </header>
    <main>
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
