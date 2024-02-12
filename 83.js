const mapString = (str, fn)=> 
 str
    .split('')
    .map((c,i) => fn(c,i, str))
    .join('')
console.log(mapString('JS exercises', c=> c.toUpperCase()))