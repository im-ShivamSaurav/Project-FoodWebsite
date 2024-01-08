import MenuCard from "./MenuCard";

const RestaurantMenu = (props) => {
    const {resM} = props;
      const {title,itemCards}=resM?.card?.card
      return(
          <div className="Section">
              <h1>{title}</h1>
              {itemCards?.map((i)=>(<MenuCard key={i?.card?.info?.id} MenuC={i}/>))}
          </div>
      )
  }

  export default RestaurantMenu;