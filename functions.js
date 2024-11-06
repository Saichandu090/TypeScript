"use strict";
/*Different ways to write functions
  1.Named functions
  2.Arrow functions
  3.Function expression */
function add(num1, num2, num3) {
    return num1 + num2; // This is called as named function
    // num3? is optional parameter
}
console.log(add(2, 3, 4));
const sub = (num1, num2) => num1 - num2; // Another way to write a function
console.log(sub(3, 4)); //This is called as arrow function
const mul = function (num1, num2) {
    return num1 * num2; //This is called as function expression
};
console.log(mul(2, 3));
/* Types of parameters
  1.optional
  2.required
  3.rest  */
//optional parameter
function adding(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2; //ternary operator using with optional parameter if present ? true :false
}
//required
const subract = (num1, num2, num3 = 10) => num1 - num2 - num3;
//If num3 is passed by the user then the default one is not taken ,If it's not provided then the default one is taken for num3
//rest parameters
const adds = function (num1, num2, ...nums3) {
    return num1 + num2 + nums3.reduce((acc, num) => acc + num);
};
let numbers;
numbers = [1, 2, 3, 4, 5]; // ... is the rest operator we need to pass if we are using rest parameter(only 3 dots)
console.log(adds(3, 4, ...numbers)); //If we dont pass the rest parameter then at runtime we get exception for using empty array with reduce in JS
//adds(4,5,...[1,2,3,4,5]); This also works for rest parameters.
console.log(adds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // This also works with rest parameters as the first two gets assigned to their place and the remaining will get converted into array
// Generic Functions
// T represents Type which can be of any type and we can turn our function to accept only homogenous values with the help of generic
function concat(items) {
    return new Array().concat(items);
}
let concatArray = concat([1, 2, 3, 4, 5]);
console.log(concatArray);
let concatString = concat(['1', '2', '3', 'sai', 'chandu']);
console.log(concatString);
let concatAny = concat([1, 'sai', false]);
console.log(concatAny);
