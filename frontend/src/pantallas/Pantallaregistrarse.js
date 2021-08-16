import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import { registro } from '../acciones/usuarioAcciones';
import CajaCargando from '../componentes/CajaCargando';
import CajaMensaje from '../componentes/CajaMensaje';

export default function Pantallaregistrarse(props) {

    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    
    const usuarioRegistro = useSelector((state) => state.usuarioRegistro);
    const { usuarioInfo, cargando, error } = usuarioRegistro;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registro(email, contraseña))
        //Accion de registrarse
    };
    //Una vez logueado redirigir a inicio
    useEffect(() => {
        if(usuarioInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, usuarioInfo]);
    return (
        <div>
            {/*Formulario para Registrarse */}
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Completa tus datos</h1>
                </div>
                { cargando && <CajaCargando></CajaCargando>}
                {error && <CajaMensaje variante="danger">{error}</CajaMensaje>}
                <div>
                <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input
                    type="password"
                    id="contraseña"
                    placeholder="Ingresa contraseña"
                    required
                    onChange={(e) => setContraseña(e.target.value)}
                    >
                    </input>
                </div> 
                <div>
                    <label/>
                    <button className="primary" type="submit">Registrarse</button>
                </div>
                <div>
                    <label/>
                    <div>
                        ¿Nuevo Usuario? {' '}
                        <Link to="/registrarse">Creá tu cuenta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}


