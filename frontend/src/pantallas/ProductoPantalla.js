import React from 'react'
import { Link } from 'react-router-dom'
import Puntaje from '../componentes/Puntaje';
import data from '../data'

export default function ProductoPantalla(props) {
    const producto = data.productos.find(x => x._id === props.match.params.id);
    if(!producto){
        return <div>Producto no encontrado</div>
    }
    return (
        <div>
            <Link to="/">Volver al Inicio</Link>
           <div className="row top">
                <div className="col-2">
                    <img className="large" src={producto.imagen} alt={producto.nombre}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{producto.nombre}</h1>
                        </li>
                        <li>
                            <Puntaje
                            puntaje={producto.puntaje}
                            numReseñas={producto.numReseñas}
                            />
                        </li>
                        <li>Precio : ${producto.precio}</li>
                        <li>
                            Descripcion:
                            <p>{producto.descripcion}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Precio</div>
                                    <div className="precio">${producto.precio}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Disponibilidad Stock</div>
                                    <div>
                                        {producto.disponibilidadStock > 0 ? (
                                            <span className="exito">En Stock</span>
                                        ) : (
                                            <span className="error">Sin Stock</span>
                                        )}
                                        </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Añadir al carrito</button>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    )
}

