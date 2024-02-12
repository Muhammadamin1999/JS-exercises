const myFun = arr => arr.reduce((a,v)=> ((a[v[0]]=v[1]),a),{})
console.log(myFun([['a',1],['b',2]]))