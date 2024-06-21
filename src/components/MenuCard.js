import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = (props) =>{
    const {MenuC} = props;
    const {name,imageId,description,ratings,price,defaultPrice}= MenuC?.card?.info;
    const [itemCount,setItemCount] = useState(0);
    const dispatch = useDispatch();


    const clickAdd = () =>{
        setItemCount((value)=>(value+1));
        dispatch(addItem(MenuC));
    }

    const clickSub = () =>{
        setItemCount((value)=>(value-1));
    }
      return(
        <div className="flex MenuDetail m-7 justify-between mx-11 items-center border-b-2 p-3 flex-row-reverse sm:flex-row">
            
            <div className="MenuText">
                <h2 className="font-bold text-gray-600 mb-0 line-clamp-2">{name}</h2>
                <div className="price mb-4 font-bold text-lg"><i className="fa-solid fa-indian-rupee-sign"></i> {price/100 || defaultPrice/100}</div>
                <h5 className="description line-clamp-1 sm:line-clamp-2 text-gray-400 lg:max-w-[700px]">{description}</h5>
                
            </div>
            <div className= "MenuImg text-center m-2">
                <div>
                    <img className="rounded-lg lg:w-48 lg:h-36 w-auto " alt={name} src={CDN_URL+imageId}/>
                </div>
                {itemCount == 0?
                (
                    <button onClick={clickAdd} className="text-green-600 text-xl -translate-y-8 bg-white px-4 w-28 h-11 border rounded-lg font-bold { hover:bg-gradient-to-t from-green-200 to bg-white }">ADD</button>
                ):(
                    <div className="text-green-600 text-3xl -translate-y-8 bg-white w-fit m-auto flex justify-center items-center h-fit border rounded-lg font-bold">
                        <button className="rounded-lg px-3 text-3xl font-extrabold text-red-600 hover:bg-gradient-to-r from-red-200 to bg-white" onClick={clickSub}>–</button>
                        <div className="px-2 text-green-700 text-3xl select-none">{itemCount}</div>
                        <button className="rounded-lg px-3 text-3xl font-extrabold text-green-600 hover:bg-gradient-to-l from-green-200 to bg-white" onClick={clickAdd}>+</button>
                    </div>
                )
}
            </div>
        </div>
      )
  }

export default MenuCard;