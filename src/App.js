// import logo from './logo.svg';
// import './App.css';
// // import { Navbar } from './components/Navbar';
// import Navbar from './components/Navbar.js';
// import Card from './components/Cards.js';


// function App() {
//   return (
//     <>
//  <Navbar/>
//  <Card/>

//  </>
//   );
// }

// export default App;


// App.js
// App.js
import React, { useState } from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import dummyData from './data';
import Navbar from './components/Navbar';
import './App.css'; // Import the CSS file

const App = () => {
  const [filters, setFilters] = useState({
    deliveryTime: '',
    foodType: '',
    distance: '',
  });
  const [cart, setCart] = useState([]);
  const handleFilterChange = (newFilters) => {
    // Update the filters state when the user changes filter options
    setFilters(newFilters);
  };

  const handleAddToCart = (item) => {
    // Handle the logic to add the item to the cart (e.g., update the state)
    setCart([...cart, item]);
  };

  const handleResetFilters = () => {
    setFilters({
      deliveryTime: '',
      foodType: '',
      distance: '',
    });
  };
  // Apply filters to the dummy data based on user selections
  const filteredData = dummyData.filter((restaurant) => {
    const {
      deliveryTime: restaurantDeliveryTime,
      foodType: restaurantFoodType,
      distance: restaurantDistance,
    } = restaurant;

    const {
      deliveryTime: selectedDeliveryTime,
      foodType: selectedFoodType,
      distance: selectedDistance,
    } = filters;

    const deliveryTimeMatch =
      selectedDeliveryTime === '' || restaurantDeliveryTime === selectedDeliveryTime;

    const foodTypeMatch =
      selectedFoodType === '' || restaurantFoodType === selectedFoodType;

    const distanceMatch =
      selectedDistance === '' || parseInt(restaurantDistance, 10) <= parseInt(selectedDistance, 10);

    return deliveryTimeMatch && foodTypeMatch && distanceMatch;
  });

  return (
    <div className="App">
      <Navbar/>
      <Filters onFilterChange={handleFilterChange} />
      <div className="restaurant-cards">
        {filteredData.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default App;
