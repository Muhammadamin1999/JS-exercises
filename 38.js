const res = (str, length, char =' ')=>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);