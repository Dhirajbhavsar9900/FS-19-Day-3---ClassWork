import React from "react";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
function RestaurentCards({item,index}) {
  return (
    <div
      key={index}
      className=" bg-white rounded-lg shadow-md overflow-hidden p-2"
    >
      <div className=" px-4 py-2 flex items-center justify-between">
        <h3 className=" text-xl font-bold">{item.name}</h3>
        <div className="flex items-center gap-2">
          <span className=" font-semibold">Rating</span>
          <span className=" text-white text-lg bg-red-500 shadow-xl p-2 rounded-2xl flex items-center">
            {item.rating} <i className="fas fa-star"></i>
          </span>
        </div>
      </div>
      <p className=" text-sm px-4 py-2">{item.address}</p>
      <span className=" text-gray-500 px-4 py-1">
        {item.outcode}
        <span>{item.postcode}</span>
      </span>
      <div className="flex flex-col p-3 gap-2">
        <span className="flex items-center gap-1 text-green-600 font-semibold">
          <DinnerDiningIcon />
          {item.type_of_food}
        </span>
        <a href={item.URL}>
          <span className="text-blue-500">Visit Menu</span>
        </a>
      </div>
    </div>
  );
}

export default RestaurentCards;
