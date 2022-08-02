import React, { useState } from "react";
import Button from "../UI/Button.js";
import Card from "../UI/Card.js";
import PopUp from "../UI/PopUp.js";

import styles from "./AddUser.module.css";


const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const userDataHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Ошибка ввода',
        message: 'Введите какие-либо значения в поля ввода.'
      });
      return;
    }
    if (+userAge < 0) {
      setError({
      title: 'Ошибка ввода возраста',
      message: 'Значние не должно быть отрицательным.'
    });
      return;
    }
      props.onAddUserData(userName, userAge);
      setUserName("");
      setUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <PopUp title={error.title} message={error.message} onClosePopUp={errorHandler}/>}
      <Card>
        <form onSubmit={userDataHandler} className={styles.user}>
          <label htmlFor="name">Имя пользователя:</label>
          <input
            id="name"
            type="text"
            value={userName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Возраст (в годах)</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
