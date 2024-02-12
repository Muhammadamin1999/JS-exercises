const myFun = valid => (...args) => args.find(valid)
const myFun2 = myFun(_=> ![null, undefined,'', NaN].includes(_));
console.log(myFun2(undefined, null, NaN,'', 'Waldo'))