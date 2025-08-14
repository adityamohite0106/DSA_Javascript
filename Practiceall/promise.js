const myPromise = new Promise(function(resolve, reject){
  let fileLoader = false;
  if(fileLoader){
    resolve("file is loaded");
  } else {
    reject("file is not loaded");
  }
});

myPromise.then(function(value){
  console.log(value)

}).catch(error => console.log(error))

