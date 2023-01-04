import React from "react";
import { useRef, useState } from "react";
import classes from "./MealItemList.module.css";
import Input from "../../UI/Input";
const MealItemList = (props) => {
  const [amountIsValid, SetAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const AddCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountIsValid(false);
      return;
    }
    props.onAddCart(enteredAmountNumber);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={AddCartHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button> + Add</button>
        {!amountIsValid && <p>please enter a value</p>}
      </form>
    </div>
  );
};

export default MealItemList;
