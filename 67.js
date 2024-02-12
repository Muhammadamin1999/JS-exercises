const compose = (...fns)=> fns.reduce((f,g)=> (...args)=> g(f(...args)));
const add = (x,y) => x + y;
const square = x => x*x;
const addAndSquare = compose(add,square);
console.log(addAndSquare(2,3))