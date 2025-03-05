/*Question
Asked in Publicis sepient, Meesho
Level -> Easy
How would you implement a calculator class with methods for addition,
subtraction, and multiplication, supporting method chaining?
calculator.add(3).multiply(4).subtract(5).getValue()*/

class Calculator {
    constructor(initialValue = 0) {
        if(isNaN(initialValue)) {
            throw new Error("Initial Value must be a number");
        }
        this.number = initialValue;
    }

    validateNumber(number) {
        if(number == undefined || typeof number !== "number" || isNaN(number)) {
            throw new Error("Invalid input. Expected a number.");
        }
    }

    add(number) {
        this.validateNumber(number);
        this.number += number;
        return this;
    }
    multiply(number) {
        this.validateNumber(number);
        this.number *= number;
        return this;
    }
    subtract(number) {
        this.validateNumber(number);
        this.number -= number;
        return this;
    }
    getValue() {
        return this;
    }
}

try {
    const calculator = new Calculator(3);
    console.log(calculator.add(4).multiply(5).subtract(6).getValue());
} 
catch(error) {
    console.error(error.message);
}