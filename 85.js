const mask = (cc, num = 4, mask = "*") => 
  ('' + cc).slice(9, -num).replace(/./g, mask) + ('' + cc).slice(-num);
  console.log(mask(12344567857968))