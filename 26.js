const myFun = (val,def = false) => /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def

console.log(myFun('Y'));