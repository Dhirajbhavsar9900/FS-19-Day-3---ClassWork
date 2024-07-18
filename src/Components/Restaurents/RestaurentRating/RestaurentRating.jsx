


function RestaurentRating({rating}) {


  return (
    <div>
      <span className="p-2">Minimum Rating:</span>
      <input
        type="number"
        min={0}
        max={10}
        className="w-20 p-2 border-blue-600 rounded-lg outline-none border-[1px]"
      />
    </div>
  );
}

export default RestaurentRating;
