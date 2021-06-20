


function UsersList(props) {
    return (
        <div>
            <ul>
            {
                props.usersList.map((data,index) => {
                    return <li key={index} onClick={()=>props.deleteUserHandler(index)}>{data.name}</li>
                })
            }
            </ul>
        </div>
    )
}

export default UsersList