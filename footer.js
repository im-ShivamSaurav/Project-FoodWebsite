import React from "react"
import ReactDOM from "react-dom";

export default function Footer()
{
    return(
        <div className="footer">
            <div className="download">
                <div>
                    <h1>For better experience,<br/> download our App now</h1>
                </div>
                <img className="download-img" src="https://t4.ftcdn.net/jpg/03/91/88/25/360_F_391882584_42M28Owo18MHXw4yNxSQ5tSjVWnnyb7s.jpg"/>
            </div>
            <div className="second">                    
                <div className="aside">
                    <img className="gif" src="https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png"/>
                </div>
                <div className="mainfooter">
                    <h2>Address:</h2>
                    <p>Patia,Bhubaneswar<br/>India</p>
                    <br/>
                    <br/>
                    <br/>
                    <h3>©2024 Shivam.All rights reserved.</h3>
                </div>
                <div className="connect">
                    <h1>Connect with us on...</h1>
                    <img className="icon" id="insta" src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"/>
                    <img className="icon" id="facebook" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"/>
                    <img className="icon" id="twitter" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png"/>
                    <img className="icon" id="linkedin" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"/>
                </div>
            </div>
        </div>
    )
}