function ExpenseDate(props) {
  const day = props.date.toLocaleDateString("ru-RU", { day: "2-digit" });
  const month = props.date.toLocaleDateString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
