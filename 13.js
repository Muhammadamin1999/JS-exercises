const myFun = str => (str.length).toString(2)
const myFun2 = str => new Blob([str]).size
console.log(myFun('hello'))