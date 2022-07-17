import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>11.02.2022</div>
      <div className="expense-item__description">
        <h2>Страховка авто</h2>
        <div className="expense-item__price">4500 руб.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
