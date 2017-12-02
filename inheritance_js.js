function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.greeting=function(){
alert('Hi! I\'m ' + this.name.first + '.');
}

function Teacher(first,last,age,gender,intrests,subject){
	Person.call(this,first,last,age,gender,intrests);
  this.subject=subject;
}
var sexytecher=new Teacher('kate','wilson',28,'female','biology','chemistry');

//console.log(Object.getOwnPropertyNames(Person.prototype));
//console.log(Object.getOwnPropertyNames(Teacher.prototype));

Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var sexytecher=new Teacher('kate','wilson',28,'female','fuck','chemistry');
console.log(sexytecher.greeting());
