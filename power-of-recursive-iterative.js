
//power using recursive method
function power(num,times){
    return (times==1) ? num : num * power(num,times-1);  
    
}
console.log("power(2,3) using recursive: "+power(2,3));


//power using iteative method
function pow(num,times){
  var res=1;
  for(i=1;i<=times;i++){
    res *= num;
    
  }
  return  res;
  
}

console.log("power(2,5) using iterative: "+power(2,5));
