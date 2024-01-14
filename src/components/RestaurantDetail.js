import { CDN_URL } from "../utils/constants";

const RestaurantDetail = (prop) => {
    const {ResDetail} = prop;
    const {name,areaName,avgRating,city,sla,cloudinaryImageId,cuisines,totalRatings} = ResDetail;
  return(
  <div className="restaurantMenu">
    <div className="restaurant-img">
      <img alt={name} src={CDN_URL + cloudinaryImageId} />
    </div>
    <div>
      <div className="restaurantName">
        <h1>{name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <h5>
          {areaName}, {city}</h5>
        <p>
        Eta:{sla?.deliveryTime}mins</p>
      </div>
    </div>
    <div className="menuRating">
        <h3>⭐{avgRating}</h3>
        <p>{totalRatings/1000}K+ Ratings</p>
      </div>
  </div>
  )
};

export default RestaurantDetail;
