/*
Questions
Asked in Tekion
Level -> Easy
Pipe
Create a pipe function that takes a series of functions and executes them
from left to right on an input value.
Compose
Create a compose function that takes a series of functions and executes them
from right to left on an input value
*/

const pipe = (...functions) => {
    return function(initialValue) {
        return functions.reduce((currentValue, currentFunction) => currentFunction(currentValue), initialValue);
    }
};

const compose = (...functions) => {
    return function(initialValue) {
        return functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), initialValue);
    }
};

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;

console.log("Pipe");

const result1 = pipe(add5, multiply2, subtract3)(10);// (10 + 5) * 2 - 3 = 27
console.log(result1);

const result2 = pipe(toString, add5)(5); // "5" + 5 = "55"
console.log(result2);

console.log("Compose");

const result3 = compose(add5, multiply2, subtract3)(10);// (10 - 3) * 2 + 5 =19
console.log(result3);

const result4 = compose(toString, add5)(5); // "5" + 5 = "55"
console.log(result4);