import { CDN_URL } from "../utils/constants";

const RestaurantDetail = (props) => {
  const { ResDetail } = props;
  const {
    name,
    areaName,
    avgRating,
    city,
    sla,
    cloudinaryImageId,
    cuisines,
    totalRatings,
  } = ResDetail;
  return (
    <div className="lg:mx-80">
    <div className="restaurantMenu mt-28 flex justify-around sm: items-center  p-4 rounded-xl">
      <div>
        <div className="restaurantName">
          <h1 className="text-3xl font-bold font-sans">{name}</h1>
          <h3 className="text-gray-400  text-lg">{cuisines?.join(", ")}</h3>
          <h5 className="text-gray-400 ">
            {areaName}, {city}
          </h5>
          
        </div>
      </div>
      {/* <div className="restaurant-img">
        <img
          className="rounded-2xl hidden md:block"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
      </div> */}
      <div className="menuRating border border-gray-300 rounded-xl py-4 px-1 text-center text-green-600 font-bold text-lg">
        <h3 className="border-b border-gray-300 pb-2">⭐{avgRating}</h3>
        <p className="italic font-semibold text-sm mt-1 p-1">{totalRatings / 1000}K+ Ratings</p>
      </div>
      </div>
      <p className="bg-slate-300 text-center  font-semibold">
            <i class="fa-solid fa-clock"></i> 
            { "  " + (sla?.deliveryTime || "30")}mins
          </p>
          <div className="restaurant-img">
        <img
          className="rounded-3xl hidden lg:block lg:absolute lg:top-[120px] lg:left-[3%] lg:w-[14%] lg:-z-10 lg:border-4 lg:border-cyan-200 lg:shadow-2xl lg:shadow-cyan-200 lg:p-2"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
    </div>
  );
};

export default RestaurantDetail;
