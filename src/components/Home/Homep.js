import React from 'react'
import "./HomeStyles.css";
import Navbar from '../Home/Navbar'
import Carousel from './Carousel';
import Cards from './Cards';

const Homep = () => {
  return (
    <>
    
      <section className='home'>
        <Navbar/>
         <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> Promociones</h3>
            </div>
          </div>
        </div>

        <Carousel/>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter2"> Productos</h3>
            </div>
          </div>
        </div>

      {/* <Cards/> */}

      </section>
    </>
  )
}

export default Homep