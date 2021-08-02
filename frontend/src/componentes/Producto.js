import React from 'react'
import Puntaje from './Puntaje';

export default function Producto(props) {
    const {producto} = props;
    return (
        <div key={producto._id} className="card">
            <a href={`/producto/${producto._id}`}>
                <img 
                class="medium" 
                src={producto.imagen} 
                alt={producto.nombre}
                />
            </a>
        <div className="card-body">
                <a href={`/producto/${producto._id}`}>
                    <h2>{producto.nombre}</h2>
                </a>
                <Puntaje 
                    puntaje={producto.puntaje} 
                    numReseñas={producto.numReseñas}/>
            <div className="precio">${producto.precio}</div>
        </div>
     </div>
    )
}


