import React, { useState } from "react";
import Button from "../UI/Button.js";
import Card from "../UI/Card.js";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const userDataHandler = (event) => {
    event.preventDefault();
    if ((userName.length === 0) || (userAge.length === 0)) {
      const errorMessage = 'ошибочка вышла';
      console.log(errorMessage);
      // return errorMessage;
    }
    else {
      console.log("userData", userName, userAge);
      props.onAddUserData(userName, userAge);
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <Card>
      <form onSubmit={userDataHandler} className={styles.user}>
        <label htmlFor="name">Имя пользователя:</label>
        <input id="name" type="text" value={userName} onChange={nameChangeHandler} />
        <label htmlFor="age">Возраст (в годах)</label>
        <input id="age" type="number" value={userAge} onChange={ageChangeHandler} />
        <Button type="submit">Добавить пользователя</Button>
      </form>
    </Card>
  );
};

export default AddUser;
