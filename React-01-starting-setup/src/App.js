import ExpenceItem from "./components/ExpenseItem.js";

function App() {
  const expenses = [
    { id: "e1", title: "Бумага", amount: 194.12, date: new Date(2020, 7, 14) },
    {
      id: "e2",
      title: "Телевизор",
      amount: 21799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Страховка авто",
      amount: 6294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e4", title: "Новый стол", amount: 4500, date: new Date(2021, 5, 12) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenceItem>
      <ExpenceItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenceItem>
      <ExpenceItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenceItem>
      <ExpenceItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenceItem>
    </div>
  );
}

export default App;
