const change = (arr,filter) => 
    arr.reduce((acc, val, i)=> (acc,[filter[i] ? 0:1].push(val),acc),[[],[]]);
    