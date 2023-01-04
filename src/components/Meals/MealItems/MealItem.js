import MealItemList from "./MealItemList";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import Cart_context from "../../../Store/Cart-Context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const Cartctx = useContext(Cart_context);

  const AddAmountHandler = (amount) => {
    Cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemList onAddCart={AddAmountHandler} />
    </li>
  );
};

export default MealItem;
