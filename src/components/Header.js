import { useState } from "react";
import mylogo from  "../../Resources/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [LogValue,setLogValue] =useState("Login");
  const onlineStatus = useOnlineStatus();
  var onlineValue="green";
  onlineStatus===true?(onlineValue="green"):(onlineValue="red")
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg shadow-slate-300 navbar flex justify-between px-4 items-center flex-wrap sm:flex-nowrap">
      <Link to="/">
        <img className="w-20 my-3" src={mylogo} />
      </Link>
      <div className="navbar-items">
        <ul className="flex my-3 font-medium flex-wrap">
          <li className="hidden sm:block m-3 text-lg bg-gradient-to-r " style={{color:onlineValue}}>{onlineStatus===true?"Online":"Offline"}</li>
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg"><Link to="/">
            Home
            </Link>
            </li>
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg">
            <Link to="/contact">Contact</Link>
          </li >
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg"><Link to="/about">About</Link></li>
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg"><Link to="/cart">🛒</Link></li>
          <Link to="/login">
          <button
            className="log-btn hidden sm:block m-3 text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-2 rounded-md "
            >{LogValue}</button></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
