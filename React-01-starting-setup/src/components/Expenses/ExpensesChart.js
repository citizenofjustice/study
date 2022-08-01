import React from "react";
import Chart from "../Chart/Chart.js";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { lable: "Янв", value: 0 },
    { lable: "Фев", value: 0 },
    { lable: "Мар", value: 0 },
    { lable: "Апр", value: 0 },
    { lable: "Май", value: 0 },
    { lable: "Июн", value: 0 },
    { lable: "Июл", value: 0 },
    { lable: "Авг", value: 0 },
    { lable: "Сен", value: 0 },
    { lable: "Окт", value: 0 },
    { lable: "Ноя", value: 0 },
    { lable: "Дек", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expensesMonth = expense.date.getMonth(); // начиная с 0 => Январь => 0
    chartDataPoints[expensesMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
