// * IN APP.JS...

// Function which accepts an argument
// How do we call this function, and give it an argument, in a child/grandchild component?
const giveMeAnArgument = argument => {
    alert(argument);
}

// ====================================

// * IN TODO.JS - THE GRANDCHILD...

const ToDo = props => {

    // Solution 1: Use a helper function
    // This can call the function received through the prop and give it an argument!
    const helperFunction = () => {
        props.prop2("Hi world!!")
    }

    return (
        // Display one of the user's to-do strings as the content of the div
        // Solution 2: Use an anonymous function inside the event handler, and call the function received through the prop there!
        <div className="todo" onClick={() => {
            props.prop2("Hi Berlia")
        }}>{props.content.id} {props.content.text}</div>
    );
}

export default ToDo;