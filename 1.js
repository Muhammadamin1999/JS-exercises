const myFun = (obj1, obj2)=> Object.keys(obj2).every(key=> hasOwnProperty(key) && obj1[key]=== source[key]);
console.log(myFun())