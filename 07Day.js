
function removeDuplicates(n){
let index = 0
for(let i=0; i<n.length; i++){
  if(n[i] > n[index]){
      index = index+1;
        n[index] = n[i]
    }
  }
    return index+1
}

let x = removeDuplicates([0,0,1,1,2,2,3,3,4])
console.log(x)
