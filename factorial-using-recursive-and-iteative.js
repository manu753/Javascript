
//factorial using recursive method
function factorial(num){
    return (num==1) ? num : num * factorial(num-1);  
    
}
console.log("using recursive method: "+factorial());
//factoial using iteative method
function fact(num){
  var res=1;
  for(i=1;i<=num;i++){
    res *= i;
    
  }
  return  res;
}
console.log("using iteative method: "+factorial());
