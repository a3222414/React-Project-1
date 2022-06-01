import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [IsFormOpen, setIsFormOpen] = useState(false);

  const AddFormClickHandler = (event) => {
    setIsFormOpen(true);
  };
  const removeFormClickHandler = (event) => {
    setIsFormOpen(false);
  };
  const Form = IsFormOpen ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelBtn={removeFormClickHandler}
    />
  ) : (
    <button onClick={AddFormClickHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{Form}</div>;
};

export default NewExpense;
