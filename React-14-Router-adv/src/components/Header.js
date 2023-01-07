import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.home}>
        <NavLink to="/" exact>
          Greate Quotes
        </NavLink>
      </div>
      <ul>
        <li className={styles["nav-item"]}>
          <NavLink activeClassName={styles.active} to="/quotes">
            All Quotes
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink activeClassName={styles.active} to="/new-quote">
            New Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
