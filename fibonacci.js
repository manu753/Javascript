//fibonacci series

function fibo(n){
  var i=0;
  var j=1;var sum=0;
  for(x=0;x<n;x++){
    sum=i+j;
    i=j;
    j=sum
    console.log(sum);
  }
}
fibo(10);

//recursive method
function fibonacci(n){
  return (n<=1)? n : fibonacci(n-1)+fibonacci(n-2);
  
}

fibonacci(10);
