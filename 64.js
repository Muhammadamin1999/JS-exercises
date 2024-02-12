const coalesce = (...args) => args.find(_=>![undefined, null].includes(_));
console.log(coalesce('h',null,undefined,'',NaN, 'abcd'));