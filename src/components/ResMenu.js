import React, { useEffect, useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantDetail from "./RestaurantDetail";
import { useParams } from "react-router-dom";
import { MENU_URL , CORS_MENU_URL} from "../utils/constants";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const [ResDetail, setResDetail] = useState([]);
  const [MenuDetails, setMenuDetails] = useState([]);

  const {resid} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      CORS_MENU_URL+resid
    );
    json = await data.json();
    // console.log(json);

    setResDetail(json?.data?.cards[0]?.card?.card?.info);
    setMenuDetails(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };


  return (
    <div >
      <RestaurantDetail ResDetail={ResDetail}/>
      {MenuDetails === undefined || MenuDetails.length===0?<Shimmer/>:MenuDetails.slice(1).map((e,i)=>(<RestaurantMenu key={i} resM={e}/>))}
    </div>
  );
};

export default ResMenu;
