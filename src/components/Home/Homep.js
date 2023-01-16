import React from 'react'
import "./HomeStyles.css";
import Navbar from '../Home/Navbar'
import Carousel from './Carousel';
import Card from './Cards';

const Homep = () => {

  //Esta parte tiene que ser cambiada a la tabla de la base de datos
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 1',
      description: 'This is the first card.',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 2',
      description: 'This is the second card.',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 3',
      description: 'This is the third card.',
    },
  ];

  const handleButtonClick = (cardId) => {
    console.log(`Button clicked for card with id ${cardId}!`);
  };

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

        <div className="card-container">
      {cardsData.map(cardData => (
        <Card
          key={cardData.id}
          imageUrl={cardData.imageUrl}
          title={cardData.title}
          description={cardData.description}
          buttonText="Click me!"
          onButtonClick={() => handleButtonClick(cardData.id)}
        />
      ))}
    </div>

      </section>
    </>
  )
}

export default Homep