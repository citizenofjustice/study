import React from "react";
import styles from "./MenuList.module.css";

const MenuList = (props) => {
  return (
    <div className={styles.menu_list}>
      <ul>
        <li className={styles.menu_list__item}>
          <ul className={styles.menu_list__item_info}>
            <li>Суши</li>
            <li>Описание, с чем подается и т.д.</li>
            <li>Цена $$$</li>
          </ul>
          <form className={styles.menu_list__item_controls}>
            <label htmlFor="amount">Кол-во</label>
            <input type="number" id="amount" />
            <button>Добавить</button>
          </form>
        </li>
        <li className={styles.menu_list__item}>
          <ul className={styles.menu_list__item_info}>
            <li>Суши</li>
            <li>Описание, с чем подается и т.д.</li>
            <li>Цена $$$</li>
          </ul>
          <form className={styles.menu_list__item_controls}>
            <label htmlFor="amount1">Кол-во</label>
            <input type="number" id="amount1" />
            <button>Добавить</button>
          </form>
        </li>
        <li className={styles.menu_list__item}>
          <ul className={styles.menu_list__item_info}>
            <li>Суши</li>
            <li>Описание, с чем подается и т.д.</li>
            <li>Цена $$$</li>
          </ul>
          <form className={styles.menu_list__item_controls}>
            <label htmlFor="amount2">Кол-во</label>
            <input type="number" id="amount2" />
            <button>Добавить</button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
