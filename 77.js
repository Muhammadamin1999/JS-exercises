const forEachRight = (obj, callback)=> Object.keys(obj).forEach(key => callback(obj[key], key, obj))
forEachRight({foo: 'bar', a: 1}, v => console.log(v))