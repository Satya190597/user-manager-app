import React, { useState } from "react";

function AddUserForm(props) {
  // Initialize user data.
  const [userData, setUserData] = useState({
    userName: "",
    userAge: "",
  });

  // User form submit handler.
  const onSubmitHandler = (event) => {

    // Prevent default form behaviour.
    event.preventDefault();

    if(userData.userName.trim().length <= 0) {
        return  props.addNewUserHandler(null,'Please enter a user name');
    }

    
    if(userData.userAge <= 0) {
        return  props.addNewUserHandler(null,'Please enter a user age');
    }

    // Initialize new user.
    const newUser = {
      name: userData.userName,
      age: userData.userAge,
    };

    // Call addNewUserHandler in App component.
    props.addNewUserHandler(newUser);

    // Clear the form.
    setUserData({
        userName: "",
        userAge: "",
    })

  };

  // Handle user input.
  const onChangeHandler = (event) => {
    setUserData((previousState) => {
      return {
        ...previousState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="userName"
        value={userData.userName}
        onChange={onChangeHandler}
      />
      <input
        type="number"
        name="userAge"
        value={userData.userAge}
        onChange={onChangeHandler}
      />
      <button>Add User</button>
    </form>
  );
}

export default AddUserForm;
