
import RestaurentRating from "../RestaurentRating/RestaurentRating";

function RestaurentsSearch({ onchange}) {
  return (
    <div className="flex gap-5 justify-around m-5 items-center">
      <div>
        <input
          onChange={(e) => {
            onchange(e.target.value);
          }}
          type="text"
          className="border-blue-600 rounded-lg outline-none border-[1px] p-2"
          placeholder="Search Restaurants"
        />
      </div>
      <RestaurentRating />
    </div>
  );
}

export default RestaurentsSearch;
