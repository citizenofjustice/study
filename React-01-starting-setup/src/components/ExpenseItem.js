import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 28);
  const expenseTitle = "Страховка авто";
  const expenseAmount = 4500;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount} руб.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
