const input = require('readline-sync');

let str = input.question('Please type what do you like to eat? : ');
let str2=str.replace(/ /g,'*');
console.log(str2);
