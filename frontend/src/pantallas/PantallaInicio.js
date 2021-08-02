import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Producto from '../componentes/Producto.js';
import CajaCargando from '../componentes/CajaCargando.js';
import CajaMensaje from '../componentes/CajaMensaje.js';

export default function PantallaInicio() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const obtenerDatos = async () =>{
            try{
            setCargando(true);
            const { data } = await axios.get('/api/productos');
            setCargando(false);
            setProductos(data);
            } catch(err){
                setError(err.message);
                setCargando(false);
            }
        };
        obtenerDatos();
    }, []);
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

