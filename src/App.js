import React, { useState } from "react";
// import ExpensesItems from "./components/Expenses/ExpensesItem";
import NewExpense from "./components/ExpenseForm/NewExpense";
import Expense from "./components/Expenses/Expense";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Football",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, AddExpense] = useState(Dummy_expenses);

  const AddExpensesData = (expense) => {
    AddExpense((PrevExpenses) => {
      return [expense, ...PrevExpenses];
    });
  };

  return (
    <div>
      <h2>Hi Lajin</h2>
      <NewExpense AddExpense={AddExpensesData} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
