function maximum(a){
  var currMax=a[0];
  for(i=1;i<a.length;i++){
    
    if(a[i]>=currMax){
      currMax=a[i];
    }
  }
  return currMax;
}
function minimun(a){
  var currMin=a[0];
  for(i=1;i<a.length;i++){
    
      if(a[i]<=currMin){
        currMin=a[i];
      }
      
  }
  return currMin;
}
