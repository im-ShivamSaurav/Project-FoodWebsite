import MenuCard from "./MenuCard";
import { useState } from "react";

const RestaurantMenu = (props) => {
    const [dropValue, setDropValue] = useState("up")
  const { resM } = props;
  const { title, itemCards } = resM?.card?.card;
  return (
    <div className="Section lg:mx-80">
      <details open>
        <summary className="list-none marker:hidden">
            <div className="flex justify-between items-center border-b p-2 border-gray-300 hover:cursor-pointer " onClick={()=>{
                if(dropValue==="up") setDropValue("down");
                else setDropValue("up");
            }}>
          <h1 className="font-bold m-5 text-center text-xl  text-gray-400 ">
            {title}
          </h1>
          <i class={"text-gray-400 text-2xl mr-4 mt-2"+" fa-solid fa-chevron-"+dropValue}></i>
          </div>
        </summary>
        {itemCards?.map((i) => (
          <MenuCard key={i?.card?.info?.id} MenuC={i} />
        ))}
      </details>
    </div>
  );
};

export default RestaurantMenu;
