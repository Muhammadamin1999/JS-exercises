const differ = (arr,val, comp) => arr.filter(a => val.findIndex(b => comp(a,b)) === -1);
console.log(differ([1,1.2,1.5,3,0],[1.9,3,0],(a,b)=> Math.round(a)=== Math.round(b)))