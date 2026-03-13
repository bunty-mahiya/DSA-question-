//question 01 write a function that searches for an element in an array and return the indexedDB, if the element is not parent the just return - 1

function searches(quessCount) {
  const arr = [1, 3, 2, 65, 7, 4, 8, 5, 0, 12, 32];
  for (let index = 0; index < arr.length; index++) {
    if (quessCount == arr[index]) {
      return index   
    }
  }
  return -1
}

const check=searches(3);
console.log(check);

//02 question write a function that return the number of neqative number in an array

function countNegativeNumber(array){
    let count = 0;
 for (let index = 0; index < array.length; index++) {
     if(array[index] < 0){
        count=count+1
     }
 }
 return count;
}
let a=countNegativeNumber([1,2,4,3,2,])
console.log(a);

// 03 write a function that return the largest number in an array

function findLargestNumber(arr){
 let LargestNum=arr[0]
 for (let i = 0; i < arr.length; i++) {
   if(LargestNum < arr[i]){
    LargestNum=arr[i];
   }  
 }
 return LargestNum
}
const array=[0,13,3,-7,9,6,5,4,43]
const printLargestNum=findLargestNumber(array)
console.log(printLargestNum);
// 03 write a function that return the largest number in an array

function findSmallesNumber(arr){
 let smallesNum=arr[0]
 for (let i = 0; i < arr.length; i++) {
   if(smallesNum > arr[i]){
    smallesNum=arr[i];
   }  
 }
 return smallesNum
}
const printSmallesNum=findSmallesNumber(array)
console.log(printSmallesNum);
