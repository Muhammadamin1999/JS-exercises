const myFun = val => (Array.isArray(val) ? val : [val]);
console.log(myFun('war3'));
console.log(myFun([100]))