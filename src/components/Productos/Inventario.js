import React from 'react'
import InventarioStyles from './InventarioStyles'

const Inventario = () => {
  return (
    <>
    <section className='containerProdcutos'>
      
    </section>
    </>
  )
}

export default Inventario

/* const Inventario = ({inventario, toogleImportance}) => {
    const label = inventario.important
        ? 'make not important'
        : 'make important';

  return (
    <>  
    <li className='inventario'>
        <div>
            {inventario.content}
        </div>
        <button onClick={toogleImportance}>{label}</button>
    </li>
    </>
  )
}

export default Inventario */