import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "../Services/UserAuth";

function Header() {
  const [{ basket, user}] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut
    }
  }
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option--1">Hello {!user ? 'Guest' : user.displayName }</span>
            <span className="header__option--2">{(user) ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option--1">Returns</span>
          <span className="header__option--2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option--1">Your</span>
          <span className="header__option--2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option--2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
