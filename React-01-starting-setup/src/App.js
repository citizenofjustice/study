import React from 'react'; //не обязательно указывать при создании через create-react-app
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';

const App = () => {
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

  const addExpenseHandler = expense => {
    console.log('App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //Альтернатива return при импорте 'react'
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
