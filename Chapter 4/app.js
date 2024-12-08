import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/logo.png"
import resList from "./data.json";
/**
 * AppLayout
 *  Header
 *      Logo
 *      Nav Bar - Home, ABout Us, Contact Us, Cart
 *  Body
 *      Search
 *      Cards
 *  Footer
 *      Social Links
 *      Report
 *      Copyright
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
    <div className="header-container">
        <img className="logo" src={logo}></img>
        <ul className = "nav-items">
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Contact</button></li>
            <li><button>Cart</button></li>
        </ul>
    </div>
);

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.info;
    return (
    <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="card-img"></img>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}<br />
        {avgRating}⭐<br />
        {sla.deliveryTime} mins<br />
        {costForTwo}</p>
    </div>
);
}

const Body = () => (
    <div className="body-container">
        <input type="search" placeholder="Search for restaurant or cuisine" className="search-bar"></input>
        <div className="card-container">
            {
                resList.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant}/>)
            }
        </div>
    </div>
);

const Footer = () => (
    <div className="footer">
        <ul className="footer-items">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
        </ul>
        <button>Want to report something?</button>
    </div>
);

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
);

root.render(<AppLayout />);
