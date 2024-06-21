import MenuCard from "./MenuCard";
import { useState } from "react";

const RestaurantMenu = (props) => {
  const { resM, showIndex, setShowIndex} = props;
  const { title, itemCards } = resM?.card?.card;  
  const handleClick = () =>{
    setShowIndex();
    // setDropValue()
  }
  // console.log(itemCards.splice(0,1));
  return (
    <div className="Section lg:w-[900px] lg:mx-auto">
      {/* <details open> */}
        <div className="list-none marker:hidden" onClick={handleClick}>
            <div className="flex justify-between items-center border-b p-2 border-gray-300 hover:cursor-pointer " >
          <h1 className="font-bold m-5 text-center text-xl  text-gray-400 ">
            {title}
          </h1>
          {showIndex?<i class={"text-gray-400 text-2xl mr-4 mt-2"+" fa-solid fa-chevron-up"}></i>:
          <i class={"text-gray-400 text-2xl mr-4 mt-2"+" fa-solid fa-chevron-down"}></i>}
          </div>
        </div>
        {showIndex && itemCards?.map((i) => (
          <MenuCard key={i?.card?.info?.id} MenuC={i} />
        ))}
      {/* </details> */}
    </div>
  );
};

export default RestaurantMenu;
