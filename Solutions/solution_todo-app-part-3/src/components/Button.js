import React from "react";

const Button = props => {
    return (
        <div>
            <button onClick={props.updateToDos}>Create New To-Do</button>
        </div>
    );
}

export default Button;