import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./PopUp.module.css";

const PopUp = (props) => {

    return (
        <div className={styles.popUp}>
            <Card className={styles.errorWindow}>
                <div className={styles.title}>
                    <p>Заголовок</p>
                </div>
                <div className={styles.main}>
                    <p>Описание ошибки</p>
                    <Button onClick={props.onClose}>Ок</Button>
                </div>
            </Card>
        </div>
    );
};

export default PopUp;