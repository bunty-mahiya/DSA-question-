// write a function that return count of digits in a number
function countDigitNum(n){
   if(n == 0 ){
      return 1
   } ;
let count=0;
n = Math.abs(n)
while (n>0) {
   n = Math.floor(n/10) 
   count++
}
return count
}
let counts=countDigitNum(-33333);
console.log(counts);



