import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { slide as Menu } from "react-burger-menu";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import { isProblemUser, removeCredentials } from "../utils/Credentials";
import menuClosePng from "../assets/img/close.png";
import menuCloseSvg from "../assets/svg/close@3x.svg";
import menuIconPng from "../assets/img/menu.png";
import menuIconSvg from "../assets/svg/menu3x.svg";
import "./DrawerMenu.css";

const DrawerMenu = ({ history }) => {
  const resetStorage = () => {
    // Wipe out our shopping cart now
    ShoppingCart.resetCart();
  };
  const aboutLink = isProblemUser()
    ? "https://saucelabs.com/error/404"
    : "https://saucelabs.com/";

  return (
    <Menu
      customBurgerIcon={
        <img src={menuIconPng} srcSet={menuIconSvg} alt="Open Menu" />
      }
      customCrossIcon={
        <img src={menuClosePng} srcSet={menuCloseSvg} alt="Close Menu" />
      }
      outerContainerId={"page_wrapper"}
      pageWrapId={"contents_wrapper"}
      noOverlay
    >
      <button
        id="inventory_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          history.push(ROUTES.INVENTORY);
        }}
      >
        All Items
      </button>
      <button
        id="logout_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          removeCredentials();
          history.push(ROUTES.LOGIN);
        }}
      >
        Logout
      </button>
      <button
        id="reset_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          resetStorage();
        }}
      >
        Reset App State
      </button>
    </Menu>
  );
};
DrawerMenu.propTypes = {
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(DrawerMenu);
