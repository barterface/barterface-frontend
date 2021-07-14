import React from "react";

import { Link } from "react-router-dom";
import { Button } from "../UI/Button";
import classes from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterLinks}>
        <div className={classes.FooterLinksWrapper}>
          <div className={classes.FooterItems}>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
          </div>
          <div className={classes.FooterItems}>
            <Link>Privacy Policy</Link>
            <Link>Terms Of Service</Link>
          </div>
        </div>
        <div className={classes.FooterLinksWrapper}>
          <div className={classes.FooterItems}>
            <Link>Help And Support</Link>
            <Link>Give Feedback</Link>
          </div>
          <div className={classes.FooterItems}>
            <Button buttonColor="red" buttonStyle="btnOutline">
              SignUp/LogIn
            </Button>
          </div>
        </div>
      </div>
      <section className={classes.SocialMedia}>
        <div className={classes.SocialMediaWrap}>
          <div className={classes.FooterLogo}>
            <Link
              className={[classes.SocialLogo, classes.CenterLogoOnMobile].join(
                " "
              )}
            >
              <span style={{ color: "white" }}>Barter</span>
              <span style={{ color: "red" }}>Face</span>
            </Link>
            <Link className={classes.SocialLogo} style={{ fontSize: "18px" }}>
              <p>contact@barterface.com</p>
            </Link>
          </div>
          <small class={classes.WebsiteRights}>
            © 2021.All rights reserved by{" "}
            {
              <Link>
                <span style={{ color: "white" }}>Barter</span>
                <span style={{ color: "red" }}>Face</span>
              </Link>
            }
          </small>
          <div className={classes.SocialIcons}>
            <Link
              className={classes.SocialIconsLink}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              className={classes.SocialIconsLink}
              target="_blank"
              aria-label="Instagram"
            >
              <GrInstagram />
            </Link>
            <Link
              className={classes.SocialIconsLink}
              target="_blank"
              aria-label="LinkedIn"
            >
              <ImLinkedin />
            </Link>
            <Link
              className={classes.SocialIconsLink}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer;
