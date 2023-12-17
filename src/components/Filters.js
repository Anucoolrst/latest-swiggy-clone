// Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');

  const handleFilterChange = () => {
    // Pass the selected filters to the parent component (e.g., App.js)
    onFilterChange({
      deliveryTime: selectedDeliveryTime,
      foodType: selectedFoodType,
      distance: selectedDistance,
    });
  };

  const handleResetFilters = () => {
    // Reset the selected filters
    setSelectedDeliveryTime('');
    setSelectedFoodType('');
    setSelectedDistance('');

    // Pass default values or an empty object to the parent component to signify that filters should be reset
    onFilterChange({
      deliveryTime: '', // Set default value for deliveryTime
      foodType: '', // Set default value for foodType
      distance: '', // Set default value for distance
    });
  };

  return (
    <div className="filters">
      <h2>Filters</h2>

      <label>
        Delivery Time:
        <select
          value={selectedDeliveryTime}
          onChange={(e) => setSelectedDeliveryTime(e.target.value)}
        >
          <option value="">Any</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
        </select>
      </label>

      <label>
        Food Type:
        <select
          value={selectedFoodType}
          onChange={(e) => setSelectedFoodType(e.target.value)}
        >
          <option value="">Any</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
        </select>
      </label>

      <label>
        Distance:
        <select
          value={selectedDistance}
          onChange={(e) => setSelectedDistance(e.target.value)}
        >
          <option value="">Any</option>
          <option value="5">5 miles</option>
          <option value="10">10 miles</option>
        </select>
      </label>

      {/* Apply Filters Button */}
      <button onClick={handleFilterChange}>Apply Filters</button>

      {/* Reset Filters Button */}
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};

export default Filters;
