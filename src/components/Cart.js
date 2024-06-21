import React from "react";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  console.log(cartItems);
  return (
    <div>
      <div className="mt-24">
        <div className="text-red-500 text-5xl text-center font-extrabold">Cart</div>
        <div>
          {cartItems?.map((i) => (
          <MenuCard key={i?.card?.info?.id} MenuC={i} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
