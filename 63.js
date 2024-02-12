const cloneRegExp = val => new RegExp(val.source, val.flags);
const val = /lorem ipsum/gi;
console.log(val);
const val2 = cloneRegExp(val);
console.log(val2);