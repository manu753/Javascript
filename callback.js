//function are first class objects and therefore we can pass object as an arguments in function and can pass function itself as an arguments
//callback means calling the function back
function sum(x,y){
  return x+y;
 }
 function sub(x,y){
   return x-y;
 }
 function mul(x,y){
   return x*y;
 }
 function compute(x,y,callback){
   return callback(x,y);   //callback 
 }
 console.log(compute(5,2,sum));//calling sum(5,2) //7
 console.log(compute(5,2,sub));//calling sub(5,2) //3
console.log(compute(5,2,mul));//calling mul(5,2)  //10
 compute(30,3,function(a,b){//can write manual function itself in arguments
   return a/b;
 });
