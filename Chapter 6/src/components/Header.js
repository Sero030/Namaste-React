import logo from "../../public/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <img className="logo" src={logo}></img>
      <ul className="nav-items">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
        <li>
          <button>Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
