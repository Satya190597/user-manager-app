import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser/AddUser";

import React, { useState } from "react";

// + Import components.
import Users from "./Users/Users";
import Modal from "./UI/Modal";

function App() {
  // Initialize user data.
  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Add new user functionality.
  const addNewUserHandler = (newUser,error) => {
    
    if(error) {

      setErrorMessage(error)
      return false;
    }

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
      <Modal message={errorMessage}/>
      <AddUser addNewUserHandler={addNewUserHandler} />
      <Users usersList={userData} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
