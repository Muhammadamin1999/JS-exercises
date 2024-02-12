const myFun = (arr,fn)=> 
  arr.filter((v,i)=>arr.every((x,j)=> (i ===j )=== fn(v,x,i,j)))
  console.log(myFun([1,2,2,3,4,5,5]))