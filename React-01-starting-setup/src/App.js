import Expenses from "./components/Expenses.js";

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
    {
      id: "e4",
      title: "Новый стол",
      amount: 14500,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
