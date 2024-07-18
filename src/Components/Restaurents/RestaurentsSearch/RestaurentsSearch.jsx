import { useState } from "react";
import RestaurentRating from "../RestaurentRating/RestaurentRating";

function RestaurentsSearch() {
  const [search,setSearch] = useState('');
  
  const handleSearch = (e)=>{
    let a = setSearch(e.target.value);
    console.log(search);
  }
  return (
    <div className="flex gap-5 justify-around m-5 items-center">
      <div>
        <input
          onChange={handleSearch}
          type="text"
          className=" border-blue-600 rounded-lg outline-none border-[1px] p-2 "
          placeholder="Search Restaurents"
        />
      </div>
      <RestaurentRating />
    </div>
  );
}

export default RestaurentsSearch;
