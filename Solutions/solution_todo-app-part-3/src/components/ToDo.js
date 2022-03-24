import React from "react";

/* 

We will receive an object in the "content" prop, which may look like:
{
    text: "Walk the dog",
    id: 1
}

*/

const ToDo = props => {
    return (
        // Display one of the user's to-do strings as the content of the div
        <div className="todo">{props.content.text}</div>
    );
}

export default ToDo;