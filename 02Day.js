//  write a function that return the second largest number
function secondLargest(arr) {
    if(arr.length < 2){
        return null
    }
  let largest = -Infinity;
  let secondLar = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLar = largest;
      largest = arr[i];
    } else if (arr[i] > secondLar && arr[i]!=largest) {
      secondLar = arr[i];
    }
  }
  return secondLar;
}

const secondNum = secondLargest([2,2,17,8,17,3,2,5,4,]);
console.log(secondNum);
