import React from 'react'
import './InventarioStyles.css'
import Navbar from '../Home/Navbar'

const Inventario = () => {
  return (
    <>
    <section className='containerProductos'>  
    <Navbar/>

    <div className='MotoBusqueda'>
      <p>hola</p>
    </div>
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