import { Fragment } from "react";

import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

// import styles from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
