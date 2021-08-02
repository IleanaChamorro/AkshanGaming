import React, { useEffect} from 'react';
import Producto from '../componentes/Producto.js';
import CajaCargando from '../componentes/CajaCargando.js';
import CajaMensaje from '../componentes/CajaMensaje.js';
import { useDispatch, useSelector } from 'react-redux';
import { listaProductos } from '../acciones/productoAcciones.js';

export default function PantallaInicio() {
    const dispatch = useDispatch();
    const productoLista = useSelector((state) => state.productoLista);
    const { cargando, error, productos } = productoLista;


    useEffect(() => {
       dispatch(listaProductos());
    }, [dispatch]);
    return (
    <div>
        {cargando ? (
        <CajaCargando></CajaCargando>
        ) : error ? (
        <CajaMensaje variant="danger">{error}</CajaMensaje>
        ) : (
        <div className="row center">
            {productos.map((producto) => (
                 <Producto key={producto._id} producto={producto}/>
                ))}
            </div>
            )}
        </div>
    );
}

