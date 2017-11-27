var myObj={
  num:1,
}

function add(a,b,c){
  return this.num+a+b+c;
  
}

//appling call
//we are basically calling the add function on myObj to get the value of num property in object.
console.log("using call : ",add.call(myObj,1,1,1));

var arr=[1,1,1];

//using apply we can pass the Array in the arguments.
//even if Array element length is more than arguments in function required.
//function will take array element from index o to the number of argument in function.
//if function require 3 argument and Array passed having more than 3, it will take starting three element of array and ignore the rest of it.

console.log("using apply : ",add.apply(myObj,arr));


//in bind be are basically bindind an function to object 
//our function require some num property from myObj .
//mostly we use bind to solve 'this' keyword issue, when this will not refered to the required object.
//bind will return a function,pass the argument in the function
// cannot accept the array as a argument in binding. instead can enter a list values seperately.

var bound=add.bind(myObj);
console.log("using bind: ",bound(1,1,1));
var bound1=add.bind(myObj,1,1,1);
console.log("using bind no argument here: ",bound1());

//call and apply directly give the execution of the function , but it is not in the case of bind.
//it give us the function back which we have to execute it.
