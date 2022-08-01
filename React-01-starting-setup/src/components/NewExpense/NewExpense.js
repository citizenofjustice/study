import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdidting, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditigHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdidting && (
        <button onClick={startEditigHandler}>Добавить новый расход.</button>
      )}
      {isEdidting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
