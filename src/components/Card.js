import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, cuisines, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <abbr className="decoration-transparent" title={name}>
    <div className="flex sm:m-4 sm:block card h-70 hover:shadow-lg p-1 rounded-xl sm:rounded-3xl my-1 items-center border-2 border-[#c6c4c450] sm:border-none gap-3">
      <img className="menuImg w-auto h-24 sm:w-60 rounded-3xl sm:h-36" src={CDN_URL + cloudinaryImageId} />
      <div className="cardInfo p-2 w-56">
        <h1 className="Name text-base sm:text-xl font-medium sm:w-56 line-clamp-1"><abbr className="decoration-transparent" title={name}>{name}</abbr></h1>
        <h4 className="Cusine text-ellipsis text-sm overflow-hidden text-nowrap text-gray-500 font-[Roboto Condensed]]">{cuisines.join(", ")}</h4>
        <div className="RateInfo flex justify-between my-1 mx-1 font-[Times New Roman] w-30 sm:w-60 overflow-hidden text-nowrap text-ellipsis">
          <div className="location font-light text-xs ">
            <p>{locality}</p>
            <p>{areaName}</p>
          </div>
          <h4 className=" text-sm font-bold py-1 p-1 sm:text-white sm:mx-3 h-fit rounded-md  sm:bg-green-600">⭐{avgRating}</h4>
        </div>
      </div>
    </div>
      </abbr>
  );
};

export default Card;
