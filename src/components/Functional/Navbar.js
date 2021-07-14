import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Button } from '../UI/Button';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.NavbarLogo}>
        <Link>
          <span>Barter</span>
          <span>Face</span>
        </Link>
      </div>
      <div className={classes.NavbarContainer}>
        <ul className={classes.NavMenu}>
          <li className={classes.NavItem}>
            <Link className={classes.Navlinks}>My Transactions</Link>
          </li>
          <li className={classes.NavItem}>
            <Link className={classes.Navlinks}>My Account</Link>
          </li>
          <li className={classes.NavItem}>
            <Button children="Upload" buttonColor="red" buttonSize="medium" />
          </li>
        </ul>
      </div>
    </div>
  );

};

export default Navbar;
