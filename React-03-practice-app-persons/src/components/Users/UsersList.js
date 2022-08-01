import React from "react";
import Card from "../UI/Card.js";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <div className={styles.usersList}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} лет)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
