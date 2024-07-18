import Data from "./../../Data/RestaurentsData";

import RestaurentCards from "./RestuarentCard/RestaurentCards";
function RestaurantsHero() {
  console.log(Data); 

  return (
    <section className=" bg-gray-100 p-5">
      <div className="restaurants-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Data.map((item, index) => (
          <RestaurentCards  item={item} index={index}/>
        ))}
      </div>
    </section>
  );
}

export default RestaurantsHero;
