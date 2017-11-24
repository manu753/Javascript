function Brick(){
  
  this.width=100;
  this.height=150;
}
//adding methods to Brick constuctor's prototype object.
Brick.prototype.area=function(){
  
  return this.width*this.height;

  
}
var nbrick=new Brick();
//console.log(nbrick.__proto__);
//creating new constuctor with inheriting property of Brick.

function Mudbrick(){
  
  Brick.call(this); //inheriting the property of constuctor Brick ie..width and height; 
  
 //adding new property to the Mudbrick constuctor while inheriting the property of Brick constuctor also
  this.opacity=.5; 
  this.color='red_soil';
}

var nmudbrick=new Mudbrick();

//console.log(nmudbrick.__proto__);
//Mudbrick inherit all the property of Brick constuctor.
//but,it doesnot inherit the methods of Brick constuctor prototype.
//console.log(new Mudbrick());

Mudbrick.prototype = Object.create(Brick.prototype);
//inherting the Brick.prototype to Mudbrick.prototype to get methods of Brick
//console.log(Mudbrick.prototype)
var mybrick=new Mudbrick();
mybrick.area();//inherited the methoods ...yehhh .....its working!
//console.log(mybrick);

//to check the prototype of Brick
//Object.getOwnPropertyNames(Brick.prototype);
