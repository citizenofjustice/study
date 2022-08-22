import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";

import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Суши",
    description: "Вкуснейшая рыба и свежайшие овощи",
    price: 250,
  },
  {
    id: "m2",
    name: "Шницель",
    description: "Немецкое качество!",
    price: 320,
  },
  {
    id: "m3",
    name: "Бургер",
    description: "Мясной американский бургер с говядиной",
    price: 300,
  },
  {
    id: "m4",
    name: "Овощная нарезка",
    description: "Вкусные, но полезные",
    price: 200,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
