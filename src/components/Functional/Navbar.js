import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
// import { Button } from '../UI/Button';
import { Button } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "aws-amplify";
import * as authAction from "../../store/action/authAction";
import SignUp from "../Modal/SignUpModal";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [modal, setModal] = useState(false);

  //const [setModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.auth.status);
  //console.log(status);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const mobileMenuClosedHandler = () => setClick(false);
  const logOutHandler = async () => {
    try {
      await Auth.signOut().then((resp) => {
        console.log(resp);
        dispatch(authAction.authFlow(false));
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {modal ? <SignUp setShowModal={setModal} /> : null}
      <nav className={classes.Navbar}>
        <div className={classes.NavbarContainer}>
          <Link
            className={classes.NavbarLogo}
            onClick={mobileMenuClosedHandler}
          >
            <span style={{ color: "white" }}>Barter</span>{" "}
            <span style={{ color: "red" }}>Face</span>
          </Link>
          <div className={classes.MenuIcon} onClick={() => setClick(!click)}>
            {click ? (
              <ImCross style={{ color: "white" }} />
            ) : (
              <GiHamburgerMenu style={{ color: "white" }} />
            )}
          </div>
          {status && (
            <ul
              className={
                click
                  ? [classes.NavMenu, classes.Active].join(" ")
                  : classes.NavMenu
              }
            >
              <li className={classes.Navitem}>
                <Link
                  to="/my-transactions"
                  className={classes.Navlinks}
                  onClick={mobileMenuClosedHandler}
                >
                  My Transactions
                </Link>
              </li>
              <li className={classes.Navitem}>
                <Link
                  to="/my-account"
                  className={classes.Navlinks}
                  onClick={mobileMenuClosedHandler}
                >
                  My Account
                </Link>
              </li>
              <li className={classes.Navitem}>
                <Link
                  to="/explore"
                  className={classes.Navlinks}
                  onClick={mobileMenuClosedHandler}
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className={classes.NavlinksMobile}
                  onClick={mobileMenuClosedHandler}
                >
                  SignUp/LogIn
                </Link>
              </li>
            </ul>
          )}
          {!status
            ? button && (
                <div className={classes.Gap}>
                  <Button
                    // buttonStyle="btnOutline"
                    // buttonColor="red"
                    colorScheme="red"
                    onClick={() => setModal(!modal)}
                  >
                    SignUp/LogIn
                  </Button>
                </div>
              )
            : button && (
                <Button
                  // buttonStyle="btnOutline"
                  colorScheme="red"
                  onClick={logOutHandler}
                >
                  Log Out
                </Button>
              )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
