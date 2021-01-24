const input = require ("readline-sync");
let num =Number( input.question('How many people are you going with? '));
    if(Number.isInteger(num)==false||num<1){
        throw "stop execution";
    }
let isKosher =input.question(' Should it be Kosher? Please type y or n :  ');
    if( isKosher!= "y"&&isKosher!= "n") {
    throw "stop execution";
    } 
   let isSuperKosher;
    if(isKosher=="y"){
        let isKosher2=input.question('  If it is Kosher, should it be Kashrut Lemehadrin?  Please type y or n: ');
        if( isKosher2!=="y"&&isKosher2!=="n") {
            throw "stop execution";
            } 
     isSuperKosher=isKosher2;
        }
       
        let menu=['Desserts','Fish','Meat','Sushi'];
        console.log('What kind of food do you want?');
        let Choose= input.keyInSelect(menu,'Please choose you option');
        console.log(menu[Choose]);
        let kosher = ("Here are few very good kosher restaurants for you : 'Blu sky','Lumina'.");
        let superKosher =("Here are few very good kosher mehadrin restaurants for you : 'Alter Nativ','Lechem Basar'.");
        let notKosher = ("Sorry but there are only  kosher restaurants in Israel. Please choose kosher restaurant.");
        
         if(isKosher=="y"&& isSuperKosher=="y"){
            console.log(superKosher);
        }if(isKosher=="y"&&isSuperKosher!=="y"){
            console.log(kosher);
        }
           if(isKosher!=="y"&& isSuperKosher!=="y"){
            console.log(notKosher);
        }