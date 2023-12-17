// Card.js
import React from 'react';

const Card = ({ restaurant, addToCart }) => {
  const { id, name, deliveryTime, foodType, distance } = restaurant;

  const handleAddToCart = () => {
    // Pass the restaurant information to the parent component (e.g., App.js) to handle the cart logic
    addToCart({
      id,
      name,
      deliveryTime,
      foodType,
      distance,
    });
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Delivery Time: {deliveryTime}</p>
      <p>Food Type: {foodType}</p>
      <p>Distance: {distance} miles</p>
      {/* Button to add the item to the cart and proceed to checkout */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
