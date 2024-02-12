const myFun = (obj, target)=>
    target in obj 
    ? obj[target]
    : Object.values(obj).reduce((acc,val)=>{
        if(acc !== undefined) return acc;
        if(typeof val === 'object') return myFun(val, target);
    },undefined);

    const data = {
        level1: {
            level2: {
                level3: 'some data'
            }
        }
    };

    const dog = {
        'status': 'success',
        'message': 'https://'
    }