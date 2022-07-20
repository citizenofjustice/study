import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Название</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Сумма</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Дата</label>
          <input type="date" min="01-01-2019" max="31-12-2022" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Добавить</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
