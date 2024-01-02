import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.js";
import Body from "./body.js";
import Footer from "./footer.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
    <div className="main">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
);

root.render(<App/>)