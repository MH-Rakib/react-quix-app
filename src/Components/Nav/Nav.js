import React from "react";
import Account from "./Account";
import navStyle from "../../Styles/Nav.module.css";
import logo from "../../Assets/images/logo-bg.png";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <a href="index.html" className={navStyle.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
