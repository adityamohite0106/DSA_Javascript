// Memoize


function sqaure(n){
return  n*n
}

function memoize(func){
  let Cache ={};
  return function(...args){
    let n = args[0]
    if (n in Cache) {
      return Cache[n]
    }else{
      let result = func(n)
      Cache[n] = result
     return result
    }
  }
}

let effResult = memoize(sqaure)


console.time()
console.log(effResult(4))
console.timeEnd()

console.log(effResult(4))
console.log(effResult(4))
console.log(effResult(4))


