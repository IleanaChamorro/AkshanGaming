import React from 'react'

function Puntaje(props) {
    const {puntaje, numReseñas} = props
    return (
            <div className="puntaje">
                <span>
                 <i 
                    className={
                        puntaje >= 1
                        ? 'fa fa-star'
                        : puntaje >= 0.5 
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'}>
                        </i>
                    </span>
                <span>
                <i 
                className={
                    puntaje >= 2
                    ? 'fa fa-star'
                    : puntaje >= 1.5 
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'}>
                    </i></span>
                <span><i 
                    className={
                        puntaje >= 3
                        ? 'fa fa-star'
                        : puntaje >= 2.5 
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'}>
                        </i></span>
                <span><i 
                    className={
                        puntaje >= 4
                        ? 'fa fa-star'
                        : puntaje >= 3.5 
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'}>
                        </i></span>
                <span><i 
                    className={
                        puntaje >= 5
                        ? 'fa fa-star'
                        : puntaje >= 4.5 
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'}>
                        </i></span>
                        <span>{numReseñas + ' reseñas '}</span>
            </div>
    )
}

export default Puntaje
