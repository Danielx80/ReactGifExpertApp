import React from 'react'
// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  // const [counter, setCounter] = useState(10);

  
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
    <h3>{ category }</h3>
    {/* Forma para que aparezcca un ternario diciendo "cargando..." */}
    {
      isLoading ? (<h2>Cargando...</h2> ) : null
      
    // Otroa forma
    // isLoading && ( <h2>Cargando...</h2>)

    }


    {/* <button onClick={ () => setCounter(counter + 1 ) }> +1 </button>
    <h5>{ counter }</h5> */}

    <div className="card-grid">
    { 
      images.map( ( image ) => (
        <GifItem 
          key={ image.id }
          // title={ image.title}
          // url={ image.url }
          { ...image }
          />
      ))
    }
    
    </div>
    </>
  )
}
