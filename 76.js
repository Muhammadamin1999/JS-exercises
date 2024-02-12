const foreachRight = (arr, callback) => 
 arr 
    .slice(0)
    .reverse()
    .forEach(callback);
foreachRight([1,2,3,4], val => console.log(val));