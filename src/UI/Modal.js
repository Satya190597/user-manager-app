

function Modal(props) {
    return (
        <div style={{backgroundColor:"white",width:"100%",height:"100%",position:"absolute"}}>
            <p onClick={() => props.toggleErrorMessageHandler(null)}>Message - {props.message}</p>
        </div>
    )
}

export default Modal