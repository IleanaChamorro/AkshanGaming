import React from 'react';
import { Link } from 'react-router-dom';
import Puntaje from './Puntaje';

export default function Producto(props) {
    const {producto} = props;
    return (
        <div key={producto._id} className="card">
            <Link to={`/producto/${producto._id}`}>
                <img 
                class="medium" 
                src={producto.imagen} 
                alt={producto.nombre}
                />
            </Link>
        <div className="card-body">
                <Link to={`/producto/${producto._id}`}>
                    <h2>{producto.nombre}</h2>
                </Link>
                <Puntaje 
                    puntaje={producto.puntaje} 
                    numReseñas={producto.numReseñas}/>
            <div className="precio">${producto.precio}</div>
        </div>
     </div>
    )
}


