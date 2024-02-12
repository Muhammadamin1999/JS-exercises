const count = (arr,val)=> arr.reduce((a,v)=> (v === val ? a+1 : a),0);
console.log(count([1,2,3,4,5],1));