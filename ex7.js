const input = require('readline-sync');
function factorial(num){
    let result=1;
    while(num){
       
       result *=num--;
    }
    return result;
}
let num1 = Number(input.question('Please enter a possitive number: '));
   if (Number.isInteger(num1)==false){
      throw "stop execution";
   }
   let fact = factorial(num1);
   console.log(fact);