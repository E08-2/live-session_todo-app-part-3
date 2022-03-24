import React from "react";

const DoneItem = props => {
    const specifyDeletedItem = () => {
        // Sending back to App.js the ID of the specific item the user clicked
        // We receive the id through the "id" prop
        props.delete(props.id);
    }

    return (
        <div className="todo">{props.content} <span className="delete" onClick={specifyDeletedItem}>X</span></div>
    )
}

export default DoneItem;