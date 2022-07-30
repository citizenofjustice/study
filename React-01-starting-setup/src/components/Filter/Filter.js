import React, { useState } from "react";
import Card from "../UI/Card.js";
import "./Filter.css";

const Filter = (props) => {
  const [year, setYear] = useState(props.year);

  const selectHandler = (event) => {
    console.log(event.target.value);
  };

  const years = [2022, 2021, 2020, 2019];
  const months = ['Янв.', 'Фев.',  'Мар.',  'Апр.',  'Май',  'Июнь',  'Июль',  'Авг.',  'Сент.',  'Окт.',  'Ноя.',  'Дек.'];

  return (
    <Card className="filter-expenses">
      <span className="filter-by-year">
        <p>Фильтр по годам</p>
        <form>
          <select onChange={selectHandler} defaultValue={years[0]} >
            <option>{years[0]}</option>
            <option>{years[1]}</option>
            <option>{years[2]}</option>
            <option>{years[3]}</option>
          </select>
        </form>
      </span>
      <div className="expense-diagramm">
        <div className="diagramm-item">
          <div className="diagramm-item__graph">
            <div className="diagramm-item__graph__fill"></div>
          </div>
          <div className="diagramm-item__month">{months[0]}</div>
        </div>
        <div className="diagramm-item">
          <div className="diagramm-item__graph">
            <div className="diagramm-item__graph__fill"></div>
          </div>
          <div className="diagramm-item__month">{months[1]}</div>
        </div>
        <div className="diagramm-item">
          <div className="diagramm-item__graph">
            <div className="diagramm-item__graph__fill"></div>
          </div>
          <div className="diagramm-item__month">{months[2]}</div>
        </div>
        <div className="diagramm-item">
          <div className="diagramm-item__graph">
            <div className="diagramm-item__graph__fill"></div>
          </div>
          <div className="diagramm-item__month">{months[3]}</div>
        </div>
        
      </div>
    </Card>
  );
};

export default Filter;
