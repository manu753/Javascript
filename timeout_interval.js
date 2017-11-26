//printNumbers(from, to) that outputs a number every second, starting from from and ending with to

//using setTimeout
function print(from,to){
  var current=from;
  var start=setTimeout(function go(){
    console.log(current);
    if(current<to){
      setTimeout(function(){
        current++;
        go();
      },1000)
    }
    else{
      clearTimeout(start);
    }
  },0)
}

//print(1,5)


//using setInterval

function printme(from,to){
  var current=from;
  var start=setInterval(function(){
    console.log(current);
    if(current<to){
      current++;
      
    }
    else{
      clearInterval(start);
    }
  },1000)
  
}
//printme(1,5)
