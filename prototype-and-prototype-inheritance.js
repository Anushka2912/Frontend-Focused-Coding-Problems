/*Explain how prototypal inheritance works in JavaScript and how a child inherits properties from a parent using prototype.*/

//parent function
function Person(name) {
    this.name = name;
}

Person.prototype.hello = function() {
    return `Hello ${this.name}`;
}

//child function
function Developer(name, title) {
    Person.call(this, name);
    this.title = title;
}
// Override person prototype in Developer's prototype
Developer.prototype = Object.create(Person.prototype);

// Reset the constructor property of Developer's prototype
Developer.prototype.constructor = Developer;

// Now you can add any methods in developer prototype
Developer.prototype.getTitle = function() {
    return this.title;
};

const obj = new Developer("Anushka", "Software Engineer");
console.log(obj.hello());
console.log(obj.getTitle());