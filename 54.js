const fun = (end, start = 0, step = 1)=> 
Array.from({length: Math.ceil((end + 1 - start) / step)}.map((v,i)=> i * step + start))