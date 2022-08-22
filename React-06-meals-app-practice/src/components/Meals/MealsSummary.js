import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Вкусная еда, с доставкой до вас</h2>
      <p>
        Выберите свое любимое блюдо из нашего списка доступных блюд и
        насладитесь вкусным обедом или ужином дома.
      </p>
      <p>
        Все наши блюда готовятся мастерами своего дела из высококачественных
        ингредиентов и доставляется до вас точно в срок!
      </p>
    </section>
  );
};

export default MealsSummary;
