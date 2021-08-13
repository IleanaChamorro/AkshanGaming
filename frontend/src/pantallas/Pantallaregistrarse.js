import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Pantallaregistrarse() {

    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        //Accion de registrarse
    }
    return (
        <div>
            {/*Formulario para Registrarse */}
            <form className="form" onSubmit={submitHandler}>
                <div>
                <label htmlFor="email">Email</label>
                    <h1>Completa tus datos</h1>
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
                    <h1>Registrate</h1>
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


