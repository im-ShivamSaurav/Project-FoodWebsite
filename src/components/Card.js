import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, cuisines, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="card">
      <img className="menuImg" src={CDN_URL + cloudinaryImageId} />
      <div className="cardInfo">
        <h1 className="Name">{name}</h1>
        <h3 className="Cusine">{cuisines.join(", ")}</h3>
        <div className="RateInfo">
          <div className="location">
            <p>{locality}</p>
            <p>{areaName}</p>
          </div>
          <h4>⭐{avgRating}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
