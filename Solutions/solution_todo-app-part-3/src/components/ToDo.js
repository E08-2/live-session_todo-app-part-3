import React from "react";

/* 

We will receive an object in the "content" prop, which may look like:
{
    text: "Walk the dog",
    id: 1
}

*/

const ToDo = props => {
    const callChangeFunctionInApp = () => {
        // Call the "changeItemToDone" function in App.js
        // Give it the "id" of the item the user clicked as an argument
        props.change(props.content.id);
    }
    
    return (
        // Display one of the user's to-do strings as the content of the div
        <div className="todo" onClick={callChangeFunctionInApp}>{props.content.text}</div>
    );
}

export default ToDo;