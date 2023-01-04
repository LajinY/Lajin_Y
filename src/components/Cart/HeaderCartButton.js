import React from "react";
import classes from "../Cart/HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import Cart_context from "../../Store/Cart-Context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(Cart_context);

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
