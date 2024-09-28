// fibonacci using constructor funcion

function Fib(){
  this.fibMomo = {};

  this.printFibValue = function (n = 0){
    
    if(n === 1 || n === 0){
      this.fibMomo[n] = n;
      return n;
    }
    
    if(this.fibMomo[n]){
      return this.fibMomo[n];
    }
     // for n is positive number
    if(n >= 0){
     const res = this.printFibValue(n - 1) + this.printFibValue(n - 2)
     this.fibMomo[n] = res;
     return res;
    }
    // for n is negative number
    if(n < 0){
     const res = this.printFibValue(n + 2) - this.printFibValue(n + 1)
     this.fibMomo[n] = res;
     return res;
    }

  }
  
}

const x = new Fib();
x.printFibValue(10)
x.printFibValue(-10)
console.log(x)
console.log(x.printFibValue(6));

Output:

Fib {
  fibMomo: {
    '0': 0,
    '1': 1,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 5,
    '6': 8,
    '7': 13,
    '8': 21,
    '9': 34,
    '10': 55
  },
  printFibValue: [Function (anonymous)]
}
8



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
