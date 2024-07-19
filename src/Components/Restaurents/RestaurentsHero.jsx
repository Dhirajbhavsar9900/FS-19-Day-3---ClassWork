import { useState } from "react";
import Data from "./../../Data/RestaurentsData";
import RestaurentsSearch from "./RestaurentsSearch/RestaurentsSearch"
import RestaurentCards from "./RestuarentCard/RestaurentCards";

function RestaurantsHero() {

  const [searching, setSearching] = useState("")

  let filter = [...Data];
  if(searching !== ""){
   filter = filter.filter((data) => 
      data.name.toLowerCase().includes(searching.trim().toLowerCase())
    )
  }

  return (
    <section className=" bg-gray-100 p-5">
      <RestaurentsSearch onchange={(searching)=>{setSearching(searching)}}/>
      <div className="restaurants-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filter.map((item, index) => (
          <RestaurentCards item={item} index={index}/>
        ))}
      </div>
    </section>
  );
}

export default RestaurantsHero
