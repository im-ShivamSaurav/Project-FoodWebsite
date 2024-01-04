import resdata from "./resdata";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, cuisines, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="card">
      <img
        className="menuImg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" +
          cloudinaryImageId
        }
      />
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

export default function Body() {
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
          {resdata.map((x) => (
            <Card key={x.info.id} resData={x} />
          ))}
        </div>
      </div>
    </div>
  );
}
