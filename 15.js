const reduce_With = (arr, comp = (a,b)=> a-b)=>
  arr.reduce((a,b)=> (comp(a,b) >= 0 ? b : a));
  console.log(reduce_With([1,2,3]))