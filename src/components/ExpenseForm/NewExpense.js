import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpensesData = (expenseData) => {
    const ExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    // console.log(ExpenseData);
    props.AddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm OnSaveData={SaveExpensesData} />
    </div>
  );
};

export default NewExpense;
