import './ExpenseDate.css';

function ExpenseDate(props) {
  const day = props.date.toLocaleDateString("ru-RU", { day: "2-digit" });
  const month = props.date.toLocaleDateString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
