import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./PopUp.module.css";

const PopUp = (props) => {
  return (
    <div>
      <div className={styles.popUp} onClick={props.onClosePopUp}></div>
      <Card className={styles.errorWindow}>
        <div className={styles.title}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.main}>
          <p>{props.message}</p>
        </div>
        <div>
          <Button onClick={props.onClosePopUp}>Ок</Button>
        </div>
      </Card>
    </div>
  );
};

export default PopUp;
