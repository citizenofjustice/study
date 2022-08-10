import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton.js";

import mealsImage from '../../assets/meals.jpg'; 
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
