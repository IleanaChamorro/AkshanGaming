import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { detallesProducto } from '../acciones/productoAcciones.js'
import Puntaje from '../componentes/Puntaje';
import CajaCargando from '../componentes/CajaCargando.js';
import CajaMensaje from '../componentes/CajaMensaje.js';

export default function ProductoPantalla(props) {
    const dispatch = useDispatch();
    const productoId = props.match.params.id;
    const productoDetalles = useSelector((state) => state.productoDetalles);
    const { cargando, error, producto } = productoDetalles;

    useEffect(() => {
        dispatch(detallesProducto(productoId));
    }, [dispatch, productoId]);
    return (
        <div>
            {cargando ? (
            <CajaCargando></CajaCargando>
            ) : error ? (
            <CajaMensaje variant="danger">{error}</CajaMensaje>
            ) : (
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
            
                )}
        </div>
    )
}

