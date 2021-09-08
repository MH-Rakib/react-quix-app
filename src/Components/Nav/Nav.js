import React from "react";
import Account from "./Account";
import navStyle from "../../Styles/Nav.module.css";
import logo from "../../Assets/images/logo-bg.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link to="/" className={navStyle.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
