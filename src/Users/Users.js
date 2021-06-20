// + Import CSS
import styles from "./Users.module.css";

// + Import components.
import UsersList from "./UsersList";


function Users(props) {
    console.log(props.usersList)
    return (
        <div>
            <h1>List of users</h1>      
            <UsersList usersList={props.usersList} deleteUserHandler={props.deleteUserHandler} />      
        </div>
    )
}

export default Users