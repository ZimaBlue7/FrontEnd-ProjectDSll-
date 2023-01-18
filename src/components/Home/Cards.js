import React from 'react';
import './CardsStyles.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
        <button className="card-button" onClick={props.onButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
