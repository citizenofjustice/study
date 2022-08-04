import React from "react";
import styles from './Header.module.css';
import Card from '../Card/Card.js';

const Header = props => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>ReactMeals</h1>
            <Card className={styles.cart}>
                <p>Cart</p> {/*временное название*/}
                <p>5</p> {/*нужно сделать динамически*/}
            </Card>
        </div>
    );
}

export default Header;