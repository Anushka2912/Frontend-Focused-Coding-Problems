/* Write custome polyfill for call, apply and bind method ? */

//CALL
Function.prototype.myCall = (context, ...args) => {
    if(typeof this !== 'function') {
        throw new Error("myCall must be call on a function");
    }

    context = context !== null && context !== undefined ? Object(context) : globalThis;
    
}