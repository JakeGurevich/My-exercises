console.log(`
                  ........  ^^^^^^^^^ .........  
                           GAME OF WAR
                  ........     0|0     ........
                                ^ 
                                                         `);
    const input = require('readline-sync')  ;
    const name = input.question('PLease enter your name: ') ;
    let cash = 50;
    console.log(`Hi ${name} , you currently have ${cash} ILS`);
    
    while(cash>0 ){
        let bet =Number( input.question(`Place your bet for the next round: 1 to ${cash} : `)) ;
         if (Number.isInteger(bet)!== true || bet<0||bet>cash){
             console.log(`I sad between 1 to ${cash} and you typed ${bet}!
                          See  you next time !! Bye,bye !!`); break;
         }
         let userRandom = Math.floor(Math.random() * 10);
         let random = Math.floor(Math.random() * 10);
         
         console.log(`Your card is ${userRandom} and my card is ${random}`);
         if (userRandom<random){
           cash-=bet;  
            console.log(`I won ! And now you have only  ${cash} ILS`);
         } else if (userRandom==random){
              
             console.log('It is a draw. Please place you bet again.');
        
         }   else{
            cash+=bet;
            console.log(`You won! Now you have ${cash} ILS`);}
         if(cash==0){
            console.log('Sorry , but you broke. See you next time !');
            break;
        
        } let menu = ['Play another round','Leave with my money:)'];
        let choise = input.keyInSelect(menu,'What woud you like to do?');
           if (choise==0) {

            console.log('Good choise ! Lets continue !');
            
            } else {
    
            console.log(
                      `Mazl tov ! You have ${cash} ILS now ! 
                      Thank you for playing ! Bye ,bye ! `);
                      break;}
    }

