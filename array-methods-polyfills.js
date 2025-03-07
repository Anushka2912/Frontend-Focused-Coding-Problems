/*Write custom polyfill for map, reduce, filter, every ?*/

//MAP
Array.prototype.myMap = function(callback) {
    if(typeof callback !== 'function') {
        throw new TypeError(callback + "is not a function");
    }

    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

//REDUCE
Array.prototype.myReduce = function(callback, initialValue) {
    if(typeof callback !== 'function') {
        throw new TypeError(callback + "is not a function");
    }

    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

//FILTER
Array.prototype.myFilter = function(callback) {
    if(typeof callback !== 'function') {
        throw new TypeError(callback + "is not a function");
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

//EVERY
Array.prototype.myEvery = function(callback) {
    if(typeof callback !== 'function') {
        throw new Error(callback + "is not a function");
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        if(!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

const arr = [1, 2, 3, 4];

const square = arr.myMap(num => num * num);
console.log(square);

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

const even = arr.myFilter(x => x % 2 === 0);
console.log(even);

const allPositive = arr.myEvery(x => x > 0);
console.log(allPositive);