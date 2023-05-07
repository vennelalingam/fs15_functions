/*
1)
Create a function named
"triple" that takes one
parameter, x, and returns
the value of x multiplied
by three.
*/

function triple(x){
    return (x * 3);
}
let multiply = triple(7);
console.log("Triple Multiplication:", multiply); //21


/*
2)
Create a function named "subtract" that
takes two parameters and returns the result of
the second value subtracted from the first.
*/

function subtract(x, y){
    return (x - y);
}
let result = subtract(17, 5)
console.log("subtracted value:", result)

/*
3)
Create a function named "createArray" that
takes three arguments and returns
those arguments in an array.
*/

let newArray = [];
function createArray(arr1, arr2, arr3){
   let result = newArray.push(arr1, arr2, arr3);
    // console.log(newArray);
    return newArray
}

// //Test case:
// console.log(createArray(3, "a", true)); // [3, "a", true]
// console.log(createArray(3, 4, 5));

/*
4)
Create a function named "greetPerson". It should
accept a string as an argument and return that
string as part of a longer sentence that says hello.
If the function is called with an argument that is
not a string, it should return "Please provide a name."

*/
function greetPerson(aString){
    if(typeof aString === 'string')
    return (`Hello, ${aString}!`);
    else
    return (`Please provide a name`);
}

// // Test cases:
// console.log(greetPerson("Sofia")); // "Hello, Sofia!"
// console.log(greetPerson(42)); // "Please provide a name."

/*
5)
Create a function named "addTogether"– it takes
in an array of numbers as an argument
and returns the sum of all those numbers
added together.

*/
function addTogether(numArr){
    let sum = 0;
    for(let i=0; i<numArr.length; i++){
         sum += numArr[i]
        console.log(sum);          
    }
    return sum;
}
//Test case:
// console.log(addTogether([1, 2, 3, 4, 5])); // 15

/*
6)
Create a function named "getIndex". It should
two take two arguments, an array and a value.
The function should return the index where
the value is found. If the value is not
found, it should return -1.

Do NOT use the array method indexOf
in your answer. Hint: Create a loop!
*/

function getIndex(arr1, val1){

    let result = arr1.indexOf(val1)
    return result;
    
}

// // Test cases:
// console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1

/*
7)
Create a function named "includesValue"– it should
return a boolean if x (a value) is found
in arr (an array).

To do this, use the "getIndex" function
you created in the last question. Call the
"getIndex" function within the body of your
"includesValue" function.

Test cases:
console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false
*/

function includesValue(arr1, val1){

// calling inner function before it is declared => "hoisting"
    const result = getIndex(arr1, val1);

    function getIndex(arr1, val1){
        return arr1.indexOf(val1)
    }
   
    if (result >= 0)
    return true
    else 
    return false
    
}    

// Test cases:
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 6)); // false


/*
8) Nested Objects
Create a function named "createObject" that
takes in an array as the argument. It should return
an object mapping the items in that array to their
data type. Use the "result" variable provided to help
you build your return value.

let result = {
numbers: [],
booleans: [],
strings: []
}

Test case:
console.log(createObject([3, "a", true, false, 2, true])); // { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }
*/

/*
9)
Create a function named "removeSpaces" that
removes all spaces from a string.


Test cases:
console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"
*/

/*
10)
Create a function named "titleCase" that
takes a string as an argument. It should return
a string where the first letter of every word
is capitalized. Don't worry about the first word
in the sentence– assume that one is already capitalized.

Hint: the index of the letters that need to be
capitalized are 1 greater than the index of the
spaces in your string.

Test case:
console.log(titleCase("He went to the store.")); // "He Went To The Store"
*/

