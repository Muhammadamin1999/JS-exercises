const invertKey = (obj, fn) => 
 Object.keys(obj).reduce((acc,key)=> {
    const val = fn ? fn(obj[key]): obj[key];
    acc[val] = acc[val] || []
    acc[val].push(key);
    return acc;
 },{});
 console.log(invertKey({a:1, b:2 , c:3}, value => 'group '  + value))