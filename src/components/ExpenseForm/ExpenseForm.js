import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, SetenteredTitle] = useState("");
  const [enteredamount, SetenteredAmount] = useState("");
  const [entereddate, SetenteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    SetenteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    SetenteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    SetenteredDate(event.target.value);
  };

  const FormSubmit = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    props.OnSaveData(ExpenseData);
    SetenteredAmount("");
    SetenteredDate("");
    SetenteredTitle("");
  };

  return (
    <form onSubmit={FormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entereddate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
