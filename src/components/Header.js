import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import Cart from "./svg/shopping-cart-solid.svg";
import "./css/Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { count } = props;

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header
      // style={{
      //   background: useLocation().pathname === "/" ? "#EBDAFF" : "#F7F7F7",
      // }}
    >
      <div className="menu" onClick={toggle}>
        <img src={Menu} alt="menu" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">APPLE</Link>
        </h1>
      </div>
      <nav>
        <ul className={isOpen ? "toggle" : ""} onClick={() => closeMenu()}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Login</Link>
          </li>
          <li className="menu" onClick={toggle}>
            <img src={Close} alt="close" width="20" />
          </li>
        </ul>
        <div className="nav-Basket">
          <span>{count}</span>
          <Link to="/Basket">
            <img src={Cart} alt="Basket" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
