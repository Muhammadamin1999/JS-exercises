const myFun = (arr,fn) =>
  arr.reduce((acc,val,i)=> (acc[fn(val,i) ? 0 : 1].push(val),acc),[[],[]])