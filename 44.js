const prompt = arr => arr.filter(Boolean);
console.log(prompt([0,1,3,false,true,'0',NaN,null,undefined]))