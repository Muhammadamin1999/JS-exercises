const myFun = ([first,...rest], upperRest = false)=>
   first.toLowerCase() + (upperRest ? rest.join('').toUpperCase(): rest.join(''))

   console.log(myFun('A3school'))