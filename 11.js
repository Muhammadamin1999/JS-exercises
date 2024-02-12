const code = () =>{
    // let result = ['#'];
    // let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    // for(let i=1; i<=6; i++){
    //     result.push(hex[Math.floor(Math.random() * 16)]);
    // }
    // return result.join('');
     let n= (Math.random() * 0xfffff * 1000000).toString(16);
     return '#' + n.slice(0,6);
}

console.log((Math.random() * 0xfffff * 1000000).toString(16))