const input = require('readline-sync');
let str = input.question('Please type some words with vowels a,e,u,i,o,y:  ');
str = str.replace(/a/g,'A');
str = str.replace(/e/g,'E');
str = str.replace(/u/g,'U');
str = str.replace(/i/g,'I');
str = str.replace(/o/g,'O');
str = str.replace(/y/g,'Y');
console.log(str);