function reverse(arr){
   let len = arr.length;
    for(let i=0;i<=len/2;i++){
        let num1,num2;
        num1 = arr[i];
        num2 = arr[(len-1)];
        arr[i]=num2;
        arr[len-1]=num1;
        len--;
        


    }console.log(arr);
} 
let arrNum = [23,34,22,1,3,7,47,3,11];
reverse(arrNum);