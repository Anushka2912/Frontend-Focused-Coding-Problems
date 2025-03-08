/* Write custom function for Array.flat() using both recursive and iterative
approaches. */

//Recursive Approach without Depth
const flattenRecursive = (arr) => {
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    const result = [];

    for(const ele of arr) {
        if(Array.isArray(ele)) {
            result.push(...flattenRecursive(ele));
        } else {
            result.push(ele);
        }
    }
    return result;
}

const resultRecursive = flattenRecursive([[[[0]], [1]], [[[2], [3]]], [[4],[5]], [6], [[[7], [8]]]]);
console.log(resultRecursive, "Recursive Result");

//Iterative Approach without Depth
const flattenIterative = (arr) => {
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    const stack = [...arr];
    const result = [];

    while(stack.length) {
        const ele = stack.pop();
        if(Array.isArray(ele)) {
            stack.push(...ele);
        } else {
            result.push(ele);
        }
    }
    return result.reverse();
}

const iterativeRecursive = flattenIterative([[[[0]], [1]], [[[2], [3]]], [[4],[5]]]);
console.log(iterativeRecursive, "Iterative Result");