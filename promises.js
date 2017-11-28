//promises in javascript is similar to as in real world.
//promise is an object. It has property in it which we use
var promise =new Promise(function(resolve,reject){
  var workdone=true;
  if(workdone){
    resolve("work is done!");
  }
  else{
    reject("Work is not done!");
  }
});
var study=function(){
  return new Promise(function(resolve,reject){
          reject("study  completed");
  });
}
var sleep=function(){
  return new Promise(function(resolve,reject){
          resolve("sleep not completed");
  });
}

//loooping promise chain............by sung .then repeateadly!

promise.then(function(result){
  console.log(result);
  return study();//another promise to be fullfilled
}).then(function(result){
   console.log(result);
   return "going to sleep now. Bye!";
}).then(function (result){
   console.log(result);
}).catch(function(result){//catching the rejected promises and trying to resolve it.
  console.log(result);
  return "studying hard now";
}).then(function(result){
    console.log(result);
    return "finally successed";
}).then(function(result){
    console.log(result+" got good marks!");
});


//To resolve all promises and once.
Promise.all([sleep(),study()]).then(function(){
    console.log("resolved all promises!");
}).catch(function(){
  console.log("not completed all promises");
  
});

//to resolve atleast one promises.
Promise.race([sleep(),study()]).then(function(){
    console.log("atleast one is completed!");  
  
}).catch(function(){
  console.log("none of them is completed!");
});
