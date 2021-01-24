function arr(n){
    let array = new Array(n);
    for(let i=0;i<array.length;i++){
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        let num = num1*4+num2;
        if(num==0){
            num=50;
        }
        array[i]=num;
    }console.log(array);
    let min = Math.min(...array);
    let max = Math.max(...array);
   
return console.log(`Min is ${min} ,max is ${max} `);
}
let input = require('readline-sync');
let userNum =Number( input .question('Please enter the array length: ')) ;  
if(Number.isInteger(userNum)== false){
    console.log('You entered not an integer');
    throw 'Sorry not an ineger';
}
let myArr = arr(userNum);
