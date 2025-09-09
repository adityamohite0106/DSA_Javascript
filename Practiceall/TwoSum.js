// Two Sum  Problem
function twoSum(num,target){
   for(i =0; i < num.length; i++){
    for(j = i+1; j < num.length; j++){
        if(num[i]+num[j] === target){
            return [i,j]
        }
    }
   }
   return "No two sum solution"
}

console.log(twoSum([2,7,11,15],9));

// All Sum Problem 
function allSum(num ,target){
    let result = [];
    for(let i =0  ; i < num.length ; i++){
        for(j = i+1 ; j < num.length;i++){
            if(num[i] +num[j]   === target){
               result.push([i,j])
            }
        }
    }
    if (result.length > 0){
        return result
    } else{
        return "No two sum solution"
    }
}

console.log(allSum([2,7,11,15,3,6],9));