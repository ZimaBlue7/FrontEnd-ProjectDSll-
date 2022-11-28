import React from 'react'
import Navbar from '../Home/Navbar'
import "./HomeStyles.css";

const Homep = () => {
  return (
    <>
    
      <section className='home'>
        <Navbar/>
         <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> Promociones</h3>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Homep