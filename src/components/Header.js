import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [LogValue,setLogValue] =useState("Login");
  const onlineStatus = useOnlineStatus();
  var onlineValue="green";
  onlineStatus===true?(onlineValue="green"):(onlineValue="red")
  return (
    <div className="navbar">
      <Link to="/">
        <img src={LOGO_URL} />
      </Link>
      <div className="navbar-items">
        <ul>
          <li style={{color:onlineValue}}>{onlineStatus===true?"Online":"Offline"}</li>
          <li><Link to="/">
            Home
            </Link>
            </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">🛒</Link></li>
          <Link to="/login">
          <button
            className="log-btn"
            >{LogValue}</button></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
