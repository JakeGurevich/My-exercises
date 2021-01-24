let arr=[];
for(let x=1;x<=100;x++){
    
    if(x%7==0){
        arr.push('Boom');
     }
     else if(x%10==7){
         arr.push('Boom');
     }else if(x%70<10 && x>70){
        arr.push('Boom');}
         else{
         arr.push(x);
     }
     
}let boom= arr.toString();
console.log(boom);