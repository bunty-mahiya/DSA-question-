// palindrome Number 
function palindromeNum(n){
   if (n<0) return false 
    let rev=0
    let storepureValue=n
   while(n>0){
    let rem = n%10
    rev=(rev * 10) + rem
    n=Math.floor(n/10)
   }
   return storepureValue==rev;
}
let x=palindromeNum(8766121)
console.log(x);
