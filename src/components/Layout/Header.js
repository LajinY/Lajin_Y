import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Virumandi Vilas</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="a food image" />
      </div>
    </Fragment>
  );
};

export default Header;
