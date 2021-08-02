import React from 'react'

export default function CajaMensaje(props) {
    return (
    <div className={`alerta alerta-${props.variant || 'info'}`}>
        {props.children}
    </div>
    );
}

