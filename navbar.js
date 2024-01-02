import React from "react"
import ReactDOM from "react-dom";

export default function Navbar()
{
    return(
        <div className="navbar">
            <img src="https://img.freepik.com/premium-vector/food-city-logo-vector-logo-template_57516-19.jpg" />
            <div className="srch-cnt">
                <div className="srch-box">
                    <input type="search" placeholder="Type here to search your favourite restraunts and food..."></input>
                    <button className="srch-button">🔍</button>
                </div>
            </div>
            <div className="navbar-items">
                <ul>
                    <li>Home</li>
                    <li>Reastaurant</li>
                    <li>Contact</li>
                    <li>🛒</li>
                </ul>
            </div>
        </div>
    )
}