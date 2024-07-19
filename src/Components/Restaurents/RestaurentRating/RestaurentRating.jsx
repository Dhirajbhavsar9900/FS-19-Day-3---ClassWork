import React, { useState } from "react";
import Data from "../../../Data/RestaurentsData";
import RestaurentCards from "../RestuarentCard/RestaurentCards";

function RestaurentRating() {
  const [rating, setRating] = useState(0);
  const [filteredRestaurants, setFilteredRestaurants] = useState(Data);

  const filterRating = (e) => {
    const ratingValue = parseInt(e.target.value, 10); // Parse input as integer
    setRating(ratingValue);

    // Filter restaurants based on rating input
    const filtered = Data.filter((res) => res.rating >= ratingValue);
    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <span className="p-2">Minimum Rating:</span>
      <input
        type="number"
        min={0}
        max={10}
        onChange={filterRating} // Corrected function name here
        className="w-20 p-2 border-blue-600 rounded-lg outline-none border-[1px]"
      />

      {/* Display filtered restaurants */}
      <div>
        <h2>Filtered Restaurants:</h2>
          {filteredRestaurants.map((restaurant) => (
            <RestaurentCards key={restaurant} />
          ))}
      </div>
    </div>
  );
}

export default RestaurentRating;
