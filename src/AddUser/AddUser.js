// + Import CSS
import styles from "./AddUser.module.css";

import AddUserForm from "./AddUserForm";

function AddUser(props) {
    return (
        <div>
            <AddUserForm addNewUserHandler={props.addNewUserHandler} />
        </div>
    )
}

export default AddUser
