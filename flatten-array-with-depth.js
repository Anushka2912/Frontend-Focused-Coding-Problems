/* Write a function to flatten a nested array up to a given depth */

//Recursive approach with depth
const flattenRecursiveWithDepth = (arr, depth) => {
    if(!Array.isArray(arr) && typeof depth !== 'number') {
        throw new Error("Input should be an array and a number");
    }

    let result = [];

    if (depth === 0) return arr;

    for (let ele of arr) {
        if (Array.isArray(ele) && depth > 0) {
            result.push(...flattenRecursiveWithDepth(ele, depth - 1));
        } else {
            result.push(ele);
        }
    }
    return result;
};

const result = flattenRecursiveWithDepth([[[[[0]]], [1]], [[[2], [3]]], [[4], [5]]], 1);
console.log(result);