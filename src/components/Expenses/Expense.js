import React, { useState } from "react";
import ExpensesItems from "./ExpensesItem";
import ExpensesFilter from "../Expenses/ExpenseFilter";
import "./Expense.css";
import Card from "../UI/Card";
// import props.items from "../../App";
function Expense(props) {
  const [FilteredYear, SetFilteredYear] = useState("2020");

  const SelectFilter = (selectYear) => {
    SetFilteredYear(selectYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={FilteredYear}
        OnchangeFilter={SelectFilter}
      />
      {filteredExpense.map((expense) => (
        <ExpensesItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expense;
