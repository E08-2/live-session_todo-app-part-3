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
    const [ doneItems, setDoneItems ] = useState([]); 

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

    // New function to change a "To Do" item into a "Done" item
    const changeItemToDone = id => {
        // Find the item the user clicked from the "toDos" state array...
        const clickedItem = toDos.find(obj => obj.id === id);
        
        // ? Alternatively you could use .filter(), but remember this will return an ARRAY with the item inside it!
        //const clickedItem = toDos.filter(obj => obj.id === id);
        
        // Use .filter() to create a new array containing all the "to dos" EXCEPT the one the user clicked
        const restOfToDos = toDos.filter(obj => obj.id !== id);

        // Update state so the "to do" item the user clicked:
        // 1. Is removed from the "toDos" state array
        // 2. Is added to the "doneItems" state array
        // Updating state will cause the app to re-render, so the user will see the changes in the browser. :-)
        setToDos(restOfToDos);
        setDoneItems([...doneItems, clickedItem]);
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
            <ToDoList data={toDos} change={changeItemToDone} />

            <h2>DONE</h2>

            {/* Render all the to-do items the user has completed */}
            <DoneList data={doneItems} delete={deleteDoneItem} />
        </>
    );
}

export default App;