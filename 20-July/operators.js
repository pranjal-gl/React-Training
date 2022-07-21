// ***********The nullish coalescing***************
// If already defined, then value will not be changed, else new value will be assigned
// let a = 5;
// a = a ?? 20;
// console.log(a); // ---> 5

// let a;
// a = a ?? 20;
// console.log(a); // ---> 20


// let a = 10, b;
// let x = a ?? b ?? 20;
// console.log(x); // ---> 10

// let a = null, b;
// let x = a ?? b ?? 20;
// console.log(x); // ---> 20


// ***********OR OPERATOR***************
// let a = false, b;
// let x = a || b || 20;
// console.log(x); // ---> 20

let a = true, b;
let x = a || b || 20;
console.log(x); // ---> true