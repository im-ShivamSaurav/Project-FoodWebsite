import React from "react"
import ReactDOM from "react-dom";

const Card =(n)=>(
    <div className="card">
        <img className="menuImg" src="https://i2.wp.com/glamouraspirit.com/wp-content/uploads/2020/09/untitled-5264_orig.jpg?resize=1024%2C682&ssl=1"/>
        <div className="cardInfo">
            <h1 className="Name">{n}</h1>
            <h3 className="Cusine">North Indian | Chinese | Continental</h3>
            <div className="RateInfo">
                <div className="location">
                    <p>Patia,Bhubaneswar</p>
                    <p>Eta: 19 min</p>
                </div>
                <h4>⭐4.5</h4>
            </div>
        </div>
    </div>
)

export default function Body()
{
    return(
        <div className="rootContainer">
            <div className="container">
                <div className="img-container">
                </div>
                <div className="text-container">
                    <h1 className="Comp">Welcome to Food City</h1>
                    <h3 className="temp">Order your favourite dishes....<br/>Anytime | Anywhere</h3>
                    <button className="login-btn">Log In</button>
                    <button className="save-btn">Sign Up</button>
                </div>
            </div>
            <div className="Menu">
                <div className="Header">
                    <h1>Explore Today's Favourite...</h1>
                </div>
                <div className="cardList">
                    {Card("Seventh Heaven")}
                    {Card("99 North")}
                    {Card("Kaveri")}
                    {Card("Biryani House")}
                    {Card("Nirvana")}
                    {Card("Chronicles")}
                    {Card("Dine Heights")}
                    
                </div>
            </div>
        </div>
    
    )
}