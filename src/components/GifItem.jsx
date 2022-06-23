import React from 'react'

export const GifItem = ({ title, url, id }) => {

    // Mostrar IMG, TITULO Y ID VISIBLE
    
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}