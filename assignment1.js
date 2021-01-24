/* The logic of this quiz is very simlpe . This quiz has 5 questions  and evry qustion has
 4 possible answers. At the end of quiz the program going to tell how good user knows 
 geography depending on how many correct answers he will give.*/
let input = require('readline-sync');
console.log (`  
                 ########################
                    "Welcome to quiz!"
                 ########################
             
                Please answer all questions`);
let score=0;
let cities=['Moscow','Kyiv','Dnipro','Odessa'];
let cities2=['New-York','Washington','New Haven','Chicago'];

let cities3=['Berlin','Rome','Paris','London'];

let answer1=Number( input.keyInSelect(cities, "What the capital of Ukraine?"));
    if(answer1==1){
        score++;
        
    }
let answer2=Number(input.keyInSelect(cities2, "What the capital of USA?"));
if(answer2==1){
    score++;
    
}
    
let answer3=Number(input.keyInSelect(cities3, "What the capital of Italy?"));
if(answer3==1){
    score++;
    
}
    
let answer4=Number(input.keyInSelect(cities, "What the capital of Russia?"));
if(answer4==0){
    score++;
    
}
let answer5=Number(input.keyInSelect(cities3, "What the capital of Great Britain?"));
if(answer5==3){
    score++;
    
}
    

if(score<2){
    console.log("You have to now better geography!");
    if(score>2&&score<5){
       console.log("Not bad,but you can do better!") ;
    }
}if(score==5){
    console.log("Very good! Your teacher of geography should be proud of you !");
}