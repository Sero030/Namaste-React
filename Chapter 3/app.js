import React from "react";
import ReactDOM from "react-dom/client";
import image from './public/images/logo.png'
import userIcon from "./public/images/user-icon.svg"

const Header = () => (
    <div id = "container">
        <img src = {image} alt = "HD Video Logo" id = "logo"></img>
        <input type="text" placeholder="Search" id = "search"></input>
        <img src = {userIcon} alt = "HD Video Logo" id="user"></img>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />)