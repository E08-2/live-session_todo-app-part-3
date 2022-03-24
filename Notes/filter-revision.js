// * FILTER REVISION

// .filter() is an array method, like .map(), but it does something different!

// * .map()

// When you use map on an array, you: 
// 1. Find every item in the original array
// 2. Change each item in some way you choose
// 3. Return a NEW array with the changed items inside it

let testArray = [1, 2, 3, 4]
let changedArrayMap = testArray.map(num => num * 10);

console.log("Unchanged original array", testArray);
console.log("New mapped array", changedArrayMap);

// ======================================================

// * .filter()

// Filter is another array method
// It takes a query, where you define what you are looking for in the original array
// E.g. "Please filter only the even numbers / numbers above 10"
// After filter is run, it will again return a NEW array, containing ONLY the items which matched your query

// Only filter numbers < 3
let changedArrayFilter = testArray.filter(num => num < 3);
console.log ("New filtered array - will contain only numbers less than 3", changedArrayFilter);

// Filter out just the number 2
// * In other words, DELETE 2 from the array!
// [ 1, 3, 4 ]
let changedArrayFilter2 = testArray.filter(num => num !== 2);

console.log("New array with number 2 DELETED", changedArrayFilter2);

// ? Berlia: "Filter = "give me!" - "Give me numbers < 3" or "give me numbers not equal to 2".