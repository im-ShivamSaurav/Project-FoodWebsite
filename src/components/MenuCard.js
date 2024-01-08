import { CDN_URL } from "../utils/constants";

const MenuCard = (props) =>{
    const {MenuC} = props;
      const {name,imageId,description,ratings,price,defaultPrice}= MenuC?.card?.info
      return(
        <div className="MenuDetail">
            
            <div className="MenuText">
                <h2>{name}</h2>
                <h5 className="description">{description}</h5>
                <p className="price">Rs.{price/100 || defaultPrice/100}</p>
                
            </div>
            <div className= "MenuImg">
                <div>
                    <img alt={name} src={CDN_URL+imageId}/>
                </div>
                <p>⭐:{"NEW"|| ratings?.aggregatedRating?.rating}</p>
            </div>
        </div>
      )
  }

export default MenuCard;