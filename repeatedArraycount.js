function countRepeatedarray(a){
  var newobject={};
  var count=0;
  for(i=0;i<a.length;i++){
    
    if(newobject[a[i]] === undefined){
      newobject[a[i]]=1;
    }
    else{
      newobject[a[i]]=newobject[a[i]]+1;
    }
    
  }
  return newobject;
}

var a=[1,2,3,3,2,1,1,1,1];

countRepeatedarray(a);
