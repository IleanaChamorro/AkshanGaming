import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { añadirAlCarrito } from '../acciones/carritoAcciones';

export default function PantallaCarrito(props) {
    const productoId = props.match.params.id;
    const cantidad = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if(productoId){
            dispatch(añadirAlCarrito(productoId, cantidad));
        }
    }, [dispatch, productoId, cantidad])

    return (
        <div>
            <h1>Pantalla Carrito</h1>
            <p>AÑADIR AL CARRITO : ProductoId: {productoId} Cantidad: {cantidad}</p>
        </div>
    )
}


