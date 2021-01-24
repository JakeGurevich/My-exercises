function sum(){
    const input = require('readline-sync');
    let num1 =Number( input.question("Please enter number: "));
    let num2 =Number( input.question("Please enter one more number: "));
    if(num1+num2===10){
        console.log("makes 10");
        } else {
            console.log("nope");
    }


}
sum();