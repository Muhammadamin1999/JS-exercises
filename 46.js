const curry = (fn, arity = fn.length, ...args)=> 
 arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
console.log(curry(Math.pow)(2)(8));