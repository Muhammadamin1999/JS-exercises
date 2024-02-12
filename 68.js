const converge = (converge, fns) => (...args) => converge(...fns.map(fn => fn.apply(null, args)));
const average = converge((a,b) => a/b, [
    arr => arr.reduce((a,v) => a + v, 0),
    arr => arr.length
]);
console.log(average(6,7))