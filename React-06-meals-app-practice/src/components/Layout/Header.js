import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton.js";

import mealsImage from '../../assets/meals.png'; 
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Доставка еды</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
