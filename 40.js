const res = obj => Object.keys(obj).map(k => [k,obj[k]])

console.log(res({a:1, b:2}))