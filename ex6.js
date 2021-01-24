const input = require ('readline-sync');
let num=0;
while( num<=10||Number.isInteger(num )==false) {
     let num1 =Number( input.question("Please choose a number larger than 10: "));
       
         if(Number.isInteger(num1)==false){
           console.log("User answer : "+ num1);
           console.log("You entered not an integer");
           num=num1;
         } else if(num1<=10 ) {
            console.log("User answer : "+ num1);
            num=num1;
          }  else{
                console.log("Thank you");
                num=num1;
            }
            
        }
    
