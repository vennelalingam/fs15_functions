//******  1. Named Function *************
function add(x, y){
    return x + y;
}
 console.log("addition result: ", add(2, 3));
// calling of function can be done 
// at the beginning of the code as well.


//******* 2. anonymous function: **********
// Means storing function in a variable and  
// calling the variable to use in code.
// Below: defining an anonymous function
// and calling it at the same time by wrapping in ()

(function () {
    console.log("Anonymous Function");
})();

 // if we try to call it at the beginning of code
 // we get an error: should be initialised first

// hello()  ------ "error"
const hello = function () {
    console.log("hello");
};
hello(); //hello

//******* 3. Arrow function **********
const arrowFun = () => {
    console.log("Arrow Function")
};
arrowFun();

// arrow function also fails if we try to call it
//at the beginning of the code without initialization

//*-----Return and Console.log Difference------ */

function logStuff () {
    console.log("I log stuff");
}
logStuff(); // Output: I log stuff 
//but returns nothing

function returnStuff() {
    return "I return stuff";
}
returnStuff(); // return holds a valve. console.log
console.log(returnStuff()) // I return stuff 

//---------------------
function stringConversion(arr) {
    let result = '';
    for(let i = 0; i<arr.length; i++) {
        result = `${result} ${arr[i]}`;
    }
    return result;
}

console.log(stringConversion(['a', 'b', 'c']));
//-------------------

