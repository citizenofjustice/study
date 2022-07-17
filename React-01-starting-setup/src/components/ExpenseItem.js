import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleDateString("ru-RU", { day: "2-digit" });
  const month = props.date.toLocaleDateString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();
  //   const expenseTitle = "Страховка авто";
  //   const expenseAmount = 4500;

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} руб.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
