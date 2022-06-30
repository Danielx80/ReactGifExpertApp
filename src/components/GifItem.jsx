import React from 'react'
import PropTypes from 'prop-types';


export const GifItem = ({ title, url, id }) => {

    // Mostrar IMG, TITULO Y ID VISIBLE
    
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}


//Tarea
GifItem.PropTypes = {
title: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
}

// Tarea 
/*1. Añadir PropTypes
  a.title obligatorio
  b. url obligatorio

2. Evaluar el SnapShot

*/

