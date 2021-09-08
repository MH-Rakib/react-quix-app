import React from "react";
import Nav from "../Nav/Nav";
import classes from "../../Styles/Layout.module.css";
import Home from "./../../Pages/Home";

const Layout = ({ children }) => {
  // const { children } = props;
  return (
    <>
      <Nav></Nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
