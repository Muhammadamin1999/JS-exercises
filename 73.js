const difference = (a,b,fn) => {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x=> !s.has(fn(x)));
}

console.log(difference([{x:2}, {x:1}],[{x:1}], v => v.x))