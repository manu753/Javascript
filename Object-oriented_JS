//we use contructor to create object in javascipt.
//Person is a constructor function which help us to create object in javascript.
//constructor is recognised by capital letter at the begining 'Person'

function Person(first,last,age,designation,company,gender,intrest){
  
  this.name={first,last};
  this.age=age;
  this.designation=designation;
  this.company=company;
  this.gender=gender;
  this.intrest=intrest;
  this.bio=function(){
    
    return "Hello Everyone! Myself "+this.name.first+" i am a "+this.designation+" in a company named "
    +this.company+" and my hobbies are "+intrest[0]+" and "+intrest[1];
    
  }
  this.greet=function(){
    return "Good Morning "+this.name.first+"! welcome.";
    
  }
}

//created instance of object name person_one.
var person_one=new Person('manoj','manjunatha',24,'software engineeer','virtusa','male',['reading books','playing TT']);
 
//person_one is an instanceof [object and Person]
console.log("person_one is instance of Person constructor: ",person_one instanceof Person); //retun true
typeof person_one;//object
console.log(person_one);//object structue.

//call the person_one object property and method 
person_one.name.first; //getting the name property.
person_one.bio();//calling the biodata.

//some people prefer to create object instances without first creating constructors, especially if they are creating only a few instances of an object. JavaScript has a built-in method called create() that allows you to do that. With it, you can create a new object based on any existing object.

var person_two=Object.create(person_one);

//You'll see that person2 has been created based on person1—it has the same properties and method available to it.
//One limitation of create() is that IE8 does not support it. So constructors may be more effective if you want to support older browsers.
console.log(person_two);
//accessing the property
console.log(person_two.name.first);
console.log(person_two.greet());
