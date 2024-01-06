import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [LogValue,setLogValue] =useState("Login");
  return (
    <div className="navbar">
      <img src={LOGO_URL} />
      <div className="navbar-items">
        <ul>
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
