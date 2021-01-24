function arrSum(arr1,arr2){
    for(let i=0; i<arr2.length;i++){
        arr1.unshift(arr2[i]);
    }console.log(arr1);
}
let firstArr = ['Appleseeds','bootcamp ','for learning Javascript !'];
let secondArr = ['you','Thank'];
arrSum(firstArr,secondArr);