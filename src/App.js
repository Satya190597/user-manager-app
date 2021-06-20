import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser/AddUser";

import React, { useState } from "react";

// + Import components.
import Users from "./Users/Users";

function App() {
  // Initialize user data.
  const [userData, setUserData] = useState([]);

  // Add new user functionality.
  const addNewUserHandler = (newUser) => {
    setUserData((previousState) => {
      return [...previousState, newUser];
    });
  };



  // Delete user.
  const deleteUserHandler = (index) => {
    const newUserList = userData.filter((user,i) => i != index)
    setUserData(newUserList)
  }

  return (
    <div>
      <AddUser addNewUserHandler={addNewUserHandler} />
      <Users usersList={userData} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
