const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]))
console.log(maxBy([{n:4}, {n:2}, {n:8}], o=> o.n));