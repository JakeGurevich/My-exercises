const input = require('readline-sync');
let str = input.question('Please type some words:  ');
str = str.replace(/[^\w\s]/g, "");
str = str.replace(/\d/g,"");
let words = str.split(' ');
let longest ='';
for(let i = 0; i < words.length; i++){
    if(words[i].length > longest.length){
	longest = words[i];
     }
  }
console.log( `The longest word is: ${longest}`);