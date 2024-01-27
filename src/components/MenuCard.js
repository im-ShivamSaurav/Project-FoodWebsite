import { CDN_URL } from "../utils/constants";

const MenuCard = (props) =>{
    const {MenuC} = props;
      const {name,imageId,description,ratings,price,defaultPrice}= MenuC?.card?.info;
      return(
        <div className="flex MenuDetail m-7 justify-between mx-11 items-center border-b-2 p-3 flex-row-reverse sm:flex-row">
            
            <div className="MenuText">
                <h2 className="font-bold text-gray-600 mb-0 line-clamp-2">{name}</h2>
                <div className="price mb-4 font-bold text-lg"><i className="fa-solid fa-indian-rupee-sign"></i> {price/100 || defaultPrice/100}</div>
                <h5 className="description line-clamp-1 sm:line-clamp-2 text-gray-400 lg:max-w-[700px]">{description}</h5>
                
            </div>
            <div className= "MenuImg text-center m-6 sm:m-6">
                <div>
                    <img className="rounded-lg w-96 sm:w-auto" alt={name} src={CDN_URL+imageId}/>
                </div>
                <p className="text-green-600 text-sm border rounded-lg font-extralight">⭐ {"NEW"|| ratings?.aggregatedRating?.rating}</p>
            </div>
        </div>
      )
  }

export default MenuCard;