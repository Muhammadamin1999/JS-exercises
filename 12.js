const myFun = str => str.replace(/[^\x20-\x7E]/g,'');

console.log(myFun('a≈zzaå'))