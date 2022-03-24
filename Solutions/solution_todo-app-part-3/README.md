# To Do App - Part 2

Today we will add some extra functionality to the "To-Do" app you started building yesterday. 

Throughout the day I will give you extra tasks in the "Exercises" Slack channel - when you get a new task, please copy and paste it into this Readme file, so you have a record of everything you did today. :-)

---

## Today's goals: 

- Complete the To-Do app, by giving it more useful functionality!

---

### Task 2:

**Goals:**

- **Soon** we will give the user the ability to **click** each of their "todo" items when they have completed it.
- When they click a "todo" item, it will be moved to a new section of the UI called "DONE".
- **For now**, let's set up our app to work in this way. Tomorrow morning, we will implement it!

**Starting in `App.js`...**

1. Create a new `h2` element **below** your `<ToDoList />`. Give it the content "DONE".

2. Next, we want to create a new **state variable** to hold all the "to do" items the user has **completed**. This should be called `doneItems`, and be initialized to an empty array.

3. Create **two** component files in your `components` directory:
    - `DoneList.js`
    - `DoneItem.js`
    - In **each** file you should import React, create a functional component, and export the functional component as a default export. You do not need to return any JSX from either component (for now!).

4. In **`App.js`**, render a `<DoneList />` under the `<h2>` you created in step 1. This will be a container element like the `<ToDoList />`, but which will instead hold all the "to do" items which the user has **completed**. 
    - Therefore, you should also give the `<DoneList />` a prop called "data", which passes down the `doneItems` state variable you created in step 2.

5. In **`DoneList.js`**, you should now return an empty `div` from your component. 
    - Inside this `div` you should **map** the array you receive through the `data` prop. Every time you find a new object inside this array you should return a new **`<DoneItem />`**
    - Each `<DoneItem />` should receive a prop called `content`. This should pass down the `text` value from the object currently being mapped.
    - If you get stuck here, you can check out `ToDoList.js` to see a component which works in a very similar way!

6. Next, in **`DoneItem.js`**, you should return a `div` from your component with a `className` of "todo".
    - The `div` should contain the value received through its `content` prop.
    - After this, the `div` should also contain a `span` element containing an "X". You may wish to style this so that there is some extra space between the "X" and the `div`'s content.
    - Again, if you get stuck here, this component is working in a very similar way to the one in `ToDo.js`!

7. You can check your changes to see if they are working by **temporarily** changing your `doneItems` state variable so that it initializes with the following array:

```js
[
    { text: "Something I did last week", id: 1 },
    { text: "Something I did yesterday", id: 2 },
    { text: "Something I did this morning", id: 3 }
]
```

8. If your changes have worked, you should see three items in the new "DONE" section of your app as soon as the page loads.
    - You can also check out the image I posted in the "Exercises" channel to see how this should look!
    - The rest of the app should still be working as normal.
    - If your changes are working, great! Well done. :-)
    - If your changes are not working, you should carefully bug fix your code. Are you getting any errors in your VS Code terminal or browser console? If you are still stuck, find me or Adam! ;-)

---

### Task 1:

**Goals:**

- Change the way the App is working, so each new "to do" is created as an **object**, not a string.
- These changes will help us a lot when we start adding new features this afternoon!
- When you are done, the app should work the same way as before - no new features yet. :-)

**Starting in `App.js`...**

1. Create a new `h2` element **above** your `<ToDoList />`. Give it the content "TO-DO".

2. Create a third **state variable** called "currentId". It should be initialized when the app starts to a value of `1`.

3. Change the way your app works in the following ways:
    - When the app starts, your `currentToDo` state variable should be initialized as an **object**, not an empty string.
    - This object should have two properties, `text` (an empty string), and `id` (set to the `currentId` state variable).
    - As you type into the input, the `text` property of the `currentToDo` should be updated with what you type.


4. When you click the button, the `addNewToDo` function will be called - you do not need to change anything for this to work. However, you should give the `addNewToDo` function some some extra functionality:
    - First, the `currentToDo` will be added to the `toDos` state array. You do not need to change this (but note that now you will be making an array of **objects**, not strings!)
    - Once you have done this, you should **add 1** to your `currentIndex` state variable.
    - Finally, you should update the `setCurrentToDo` function call, so it resets your `currentToDo` state variable to an object (its `text` property should be an empty string, its `id` should be set to the `currentIndex` state variable).
 

5. Make sure that you also update your **child components** (e.g. their props) so that they work with the new object structure (currently they expect each "to-do" item to be a string!)

6. Finally, prove that everything you have done so far is working by creating a new "to-do" item - does it appear correctly in the "TODO" list?