
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Body() {
  const [ResList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
  };

  return (
    <div className="rootContainer">
      <div className="container">
        <div className="img-container"></div>
        <div className="text-container">
          <h1 className="Comp">Welcome to Food City</h1>
          <h3 className="temp">
            Order your favourite dishes....
            <br />
            Anytime | Anywhere
          </h3>
          <button className="login-btn">Log In</button>
          <button className="save-btn">Sign Up</button>
        </div>
      </div>
      <div className="Menu">
        <div className="Header">
          <h1>Explore Today's Favourite...</h1>
        </div>
        <div className="cardList">
          {ResList?.map((x) => (
            <Card key={x?.info.id} resData={x} />
          ))}
        </div>
      </div>
    </div>
  );
}