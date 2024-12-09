import logo from "../../public/images/logo.png"

const Header = () => (
    <div className="header-container">
        <img className="logo" src={logo}></img>
        <input type="search" placeholder="Search for restaurant or cuisine" className="search-bar"></input>
        <ul className = "nav-items">
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Contact</button></li>
            <li><button>Cart</button></li>
        </ul>
    </div>
);

export default Header;