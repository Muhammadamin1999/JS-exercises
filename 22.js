const myFun = arr => arr.filter((i)=> arr.indexOf(i) === arr.lastIndexOf(i));
console.log(myFun([1,2,3,3,4,5,6,7,8]));