import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
    <div className="main">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
);

root.render(<App/>)