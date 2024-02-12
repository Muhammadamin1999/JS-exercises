const myFun = (arr, ...target)=>{
    let argState = Array.isArray(target[0]) ? target[0] : target;
    let pulled = arr.filter((v,i)=> !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => {
        arr.push(v)
    });
    return pulled;
}

console.log(myFun([1,2,3],1,8))