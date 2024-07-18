import { useState } from "react";

function RestaurentRating({ onRatingChange }) {
  const [minRating, setMinRating] = useState('');

  const handleRatingChange = (e) => {
    const ratingValue = e.target.value;
    setMinRating(ratingValue); 
    onRatingChange(ratingValue); 
  };

  return (
    <div>
      <span className="p-2">Minimum Rating:</span>
      <input
        type="number"
        value={minRating}
        onChange={handleRatingChange}
        className="w-20 p-2 border-blue-600 rounded-lg outline-none border-[1px]"
      />
    </div>
  );
}

export default RestaurentRating;
