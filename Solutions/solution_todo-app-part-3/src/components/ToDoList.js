import React from "react";
import ToDo from "./ToDo";

const ToDoList = props => {
    return (
        <div>
            {
                // Take the "toDos" state variable (an array of "to-do" objects), passed down from App via a prop
                // For each to-do string in the array, render a <ToDo /> component inside the <ToDoList /> container.
                props.data.map(toDo => {
                    return <ToDo key={toDo.id} content={toDo} />
                })
            }
        </div>
    );
}

export default ToDoList;