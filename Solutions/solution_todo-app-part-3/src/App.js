import React, { useState } from "react";
import Button from "./components/Button";
import ToDoList from "./components/ToDoList";
import DoneList from "./components/DoneList";
import "./App.css";

const App = () => {
    // State variable to track the current id
    const [ currentId, setCurrentId ] = useState(1);
    // State variable to store the to-do objects the user has already created
    const [ toDos, setToDos ] = useState([]);
    // State variable to track what the user types in the input before they click the button
    const [ currentToDo, setCurrentToDo ] = useState({text: "", id: currentId});
    // State variable to store completed "todo" items
    const [ doneItems, setDoneItems ] = useState([
        { text: "Something I did last week", id: 1 },
        { text: "Something I did yesterday", id: 2 },
        { text: "Something I did this morning", id: 3 }
    ]); 

    // A function to update the currentToDo variable every time something changes inside the input
    const updateCurrentToDo = event => {
        setCurrentToDo({text: event.target.value, id: currentId});
    }

    // Create a new to-do object and add it to the UI when the button is clicked...
    const addNewToDo = () => {
        // Make sure the user has typed something before creating a new to-do object
        if (currentToDo.text.length > 0) {
            // Option 1: Spread operator
            setToDos([...toDos, currentToDo]);
            
            // Option 2: Concat
            // ? setToDos(toDos.concat(currentToDo));

            // Add 1 to "currentId" state variable 
            setCurrentId(currentId + 1);

            // Then reset the value of the "currentToDo" state variable (including the new "currentId" value)
            setCurrentToDo({text: "", id: currentId});
        } else {
            alert("Please type something before trying to create a new to-do!");
        }
    }

    // New function to delete the item the user clicked from the "doneItems" array
    const deleteDoneItem = id => {
        // Create an array which contains all the done items...
        // ... minus the one the user clicked on to call this function!
        const updatedDoneItems = doneItems.filter(obj => obj.id !== id);

        // Update the doneItems array in state with the new array...
        setDoneItems(updatedDoneItems);
    }
    
    return (
        <>
            <h1>TODO APP</h1>
            {/* Note: this input's value is controlled by state! */}
            <input onChange={updateCurrentToDo} value={currentToDo.text} placeholder="Add a new To-Do!" />

            {/* Click the button to add a new to-do object to the "toDos" array */}
            <Button updateToDos={addNewToDo} />

            <h2>TO-DO</h2>

            {/* Render each of the user's current to-do items in JSX inside the <ToDoList /> component */}
            <ToDoList data={toDos} />

            <h2>DONE</h2>

            {/* Render all the to-do items the user has completed */}
            <DoneList data={doneItems} delete={deleteDoneItem} />
        </>
    );
}

export default App;