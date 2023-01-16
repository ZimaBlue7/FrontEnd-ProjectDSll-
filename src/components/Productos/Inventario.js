import React from 'react'

const Inventario = ({inventario, toogleImportance}) => {
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

export default Inventario