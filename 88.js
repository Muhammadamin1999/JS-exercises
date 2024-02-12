const medium = arr => {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a,b)=> a-b);
    return arr.length % 2 !==0 ? nums[mid] : (nums[mid-1] + nums[mid]) / 2
};

console.log(medium([6,50,1,-5]))