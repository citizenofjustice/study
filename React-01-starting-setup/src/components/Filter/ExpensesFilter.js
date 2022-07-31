// import React, { useState } from "react";
// import Card from "../UI/Card.js";
// import "./ExpenseFilter.css";

// const ExpenseFilter = (props) => {
//   const [pickedYear, setYear] = useState("");

//   const selectHandler = (event) => {
//     const yearData = {
//       year: event.target.value
//     };

//     props.onPickYear(yearData);

//   };

//   const years = [2022, 2021, 2020, 2019];
//   const months = ['Янв.', 'Фев.',  'Мар.',  'Апр.',  'Май',  'Июнь',  'Июль',  'Авг.',  'Сент.',  'Окт.',  'Ноя.',  'Дек.'];

//   return (
//     <Card className="filter-expenses">
//       <span className="filter-by-year">
//         <p>Фильтр по годам</p>
//         <form>
//           <select onChange={selectHandler} defaultValue={years[0]} >
//             <option>{years[0]}</option>
//             <option>{years[1]}</option>
//             <option>{years[2]}</option>
//             <option>{years[3]}</option>
//           </select>
//         </form>
//       </span>
//       <div className="expense-diagramm">
//         <div className="diagramm-item">
//           <div className="diagramm-item__graph">
//             <div className="diagramm-item__graph__fill"></div>
//           </div>
//           <div className="diagramm-item__month">{months[0]}</div>
//         </div>
//         <div className="diagramm-item">
//           <div className="diagramm-item__graph">
//             <div className="diagramm-item__graph__fill"></div>
//           </div>
//           <div className="diagramm-item__month">{months[1]}</div>
//         </div>
//         <div className="diagramm-item">
//           <div className="diagramm-item__graph">
//             <div className="diagramm-item__graph__fill"></div>
//           </div>
//           <div className="diagramm-item__month">{months[2]}</div>
//         </div>
//         <div className="diagramm-item">
//           <div className="diagramm-item__graph">
//             <div className="diagramm-item__graph__fill"></div>
//           </div>
//           <div className="diagramm-item__month">{months[3]}</div>
//         </div>

//       </div>
//     </Card>
//   );
// };

// export default ExpenseFilter;

import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
