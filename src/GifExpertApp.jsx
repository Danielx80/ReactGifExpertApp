import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategories = ( newCategory) => {
      if( categories.includes(newCategory) ) return;
      

      // Valorant
      // Tarea para agregar un nuevo estado apretando el botton
      setCategories([  newCategory, ...categories ]);
      // El orden en que aparcen
      // setCategories([  ...categories, 'Valorant' ]);

    // otra forma de hacerlo
    // setCategories( cat => [ ...cat, 'Valorant'])
  }


  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    // setCategories={ setCategories }
      onNewCategory = { (event) => onAddCategories(event) }
    />

    {/* Listado de Gif */}
      
      { 
      categories.map( (category) => (
              <GifGrid 
                 key={ category }
                 category={ category }/>
          ))
       }
    
      {/* Gif Item */}
    </>
  )
}
