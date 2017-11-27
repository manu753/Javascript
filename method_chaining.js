//object with public property 

var obj=function (){
  
  this.i=0;
  
  this.add=function(j){
    this.i +=j;
    return this; //return is required to chain the method
  };
  
  this.sub=function(j){
    this.i -= j;
    return this; //return is required to chain the method
  };
  
  this.print=function(){
    console.log("result is: "+ this.i);
  };
  
};
//creating a new object x from object obj . Always remember funtion in javascript is also an object.
var x=new obj();
//simply calling 
console.log("'this' keyword make property of object public");
x.add(3);  //add 2 to i
x.sub(1);  //subtract 1 from 
x.print(); //print i ie., 2

//now write the function chaining or calling it as method chaining.
var y=new obj();
y.add(8).sub(5).print();//this is called method chaining...

//creating obj with private property..by removing this and adding var.
var myobj=function(){
   var i=0;//'var' makes property private
  
  var add=function(j){
    i +=j;
    return this; //return is required to chain the method
  };
  
  var sub=function(j){
    i -= j;
    return this; //return is required to chain the method
  };
  
  var print=function(){
    console.log("result is: ",i);
  };
  return{add:add , sub:sub , print:print}
  
}
var a= new myobj();
console.log("'var' keyword make property of object private")
a.add(32).sub(22).print();
