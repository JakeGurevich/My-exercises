let figlet = require('figlet');

    figlet.text('Hang Man!', 'Graffiti', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(data);
     
const input = require('readline-sync');
 
      // Let's create an array of words
 let words = ['computer','bootcamp','water','appleseeds','sunrise','palindrome','traveling','rainbow',
'sky','orange','cake','book','javascript'];
     //Now let's pick a random word from the array
let rand = Math.floor(Math.random()*words.length);
let word = words[rand].split('');

    // Let's make a variable to now how many right guesses user has
let guesses = word.length;
   // Let's make one more variable that displays an asterisk for each letter 
let wordToShow = [];
wordToShow = word.join('').replace(/\w/g,'*').split('');



let attempts = 10;
// Let's make a while loop to check how many letters left to be guessed and 
// how many attemts user has
while(attempts>0 && guesses>0){
    let guessed = false;
    console.log(`You have : ${attempts} guesses`);
    console.log('The word is :  '+wordToShow.join(""));
    // Let's get a guess from the user
    let userGuess = input.question('What is your guess ? ');
    userGuess = userGuess.toLowerCase();
     // Let's check for not valid guess
    if(userGuess.length>1||userGuess.toLowerCase() == userGuess.toUpperCase()){
         console.log('You shoud enter one character from a to z');
    // valid guess
        } else   {
           //   Now let's check if  user's guess is right
            for(let i=0; i<word.length;i++){
                // if user's guess is right let's reveil that letter
                if(word[i]==userGuess){
                wordToShow[i]=word[i];
                console.log('Verry good ! You guessed !') 
                // one letter less to guess
                 guesses--;
                
                 guessed = true;
                 
             } 
           }    
         // if didn't guess
           if(guessed==false){
            // Now the user has one attempt less  
            attempts--;
            console.log(`Try again . Now you have ${attempts} guesses left`);
         }     
         
     }



}
 // Congratulations to the user if he guesses all letters
if(guesses==0){
  console.log ('Congratulations!You won !The word is : '+ word.join("") );
} else { 
  console.log ('Sorry , you don"t have more guesses ! See you next time !');
 }
})