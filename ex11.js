
const input = require('readline-sync');

let pal = input.question('Please type a word: ');
let str=palindrome(pal);
 if(str==true){

console.log(`This word ${pal} is palindrome`);

 }

function palindrome(str) {
    
    let re = /[^A-Za-z0-9]/g; 
    str = str.toLowerCase().replace(re, '');
    let len=str.length;
   
 for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
   return false;
     }  else{
        return true;
    }
}
}