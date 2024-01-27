import React, { useState , useEffect } from "react";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
// import useResDetail from "../utils/useResDetail";
import { useParams } from "react-router-dom";
import { CORS_MENU_URL,MENU_URL } from "../utils/constants";

const ResMenu = () => {
  const [ResDetail, setResDetail] = useState([]);
  const [MenuDetails, setMenuDetails] = useState([]);

  const { resid } = useParams();

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch (CORS_MENU_URL+ resid);
    const json= await data.json();
  
  

  setResDetail(json?.data?.cards[0]?.card?.card?.info);
  setMenuDetails(
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  // console.log(
  //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  }
  return (
    <div>
      <RestaurantDetail ResDetail={ResDetail} />
      {MenuDetails === undefined || MenuDetails.length === 0 ? (
        <Shimmer />
      ) : (
        MenuDetails.slice(1).map((e, i) => <RestaurantMenu key={i} resM={e} />)
      )}
    </div>
  );
};

export default ResMenu;
