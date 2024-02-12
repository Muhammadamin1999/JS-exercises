const myFun = (arr, target)=>{
    let removed=[];
    // for(let i=0; i< target.length; i++){
    //     removed[i] = arr[target[i]];
    // }
    let pulled = arr
    .map((v,i)=> (target.includes(i) ? removed.push(v) : v))
    .filter((v,i)=> !target.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
}

console.log(myFun([1,2,3,4],[2,3]));