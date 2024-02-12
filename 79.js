const longest = (...vals) =>[...vals].sort((a,b)=> b.length - a.length)[0]
console.log(longest([1,2,3],[1,2]))