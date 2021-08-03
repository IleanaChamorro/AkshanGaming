import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { añadirAlCarrito } from '../acciones/carritoAcciones';
import CajaMensaje from '../componentes/CajaMensaje';

export default function PantallaCarrito(props) {
    const productoId = props.match.params.id;
    const cantidad = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const carrito = useSelector((state) => state.carrito);
    const { carritoItems } = carrito;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productoId){
            dispatch(añadirAlCarrito(productoId, cantidad));
        }
    }, [dispatch, productoId, cantidad]);

    const removerDelCarrito = (id) =>{
        //Remover producto del carrito
    };

    //continuar compra
    const checkoutBoton = () =>{
        props.history.push('/registrarse?redirect=pantallaInicio');
    };
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Carrito</h1>
                {carritoItems.length === 0?<CajaMensaje>
                    El carrito esta Vacio. <Link to="/">Volver al Inicio</Link>
                </CajaMensaje>
                : (
                    <ul>
                        {
                           carritoItems.map((item) => (
                               <li key={item.producto}>
                                   <div className="row">
                                       <div>
                                           <img
                                           src={item.imagen}
                                           alt={item.nombre}
                                           className="small"
                                           ></img>
                                       </div>
                                       <div className="min-30">
                                           <Link to={`/producto/${item.producto}`}>{item.nombre}</Link>
                                       </div>
                                       <div>
                                        <select 
                                           value={item.cantidad} 
                                           onChange={(e) => 
                                           dispatch(
                                              añadirAlCarrito(item.producto, Number(e.target.value))
                                            )
                                           }
                                        >
                                            {[...Array(item.disponibilidadStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            )
                                                        )}
                                           </select>
                                       </div>
                                       <div>${item.precio}</div>
                                       <div>
                                           <button 
                                           type="button"
                                           onClick={() => removerDelCarrito(item.producto)}
                                           >
                                               Eliminar Producto
                                           </button>
                                       </div>
                                   </div>
                               </li>
                           )) 
                        }
                    </ul>
                )
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({carritoItems.reduce((a, c) => a + c.cantidad, 0)} item) : $
                                    {carritoItems.reduce((a, c) => a + c.precio * c.cantidad, 0)} 
                            </h2>
                        </li>
                        <li>
                            <button
                            type="button"
                            onClick={checkoutBoton}
                            className="primary block"
                            disabled={carritoItems.length === 0}
                            >
                                Continuar Compra
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


