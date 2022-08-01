import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser.js";
import UsersList from "./components/Users/UsersList.js";
import styles from './App.module.css';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserDataHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  };

  return (
    <div className={styles.app}>
      <AddUser onAddUserData={addUserDataHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
};

export default App;
