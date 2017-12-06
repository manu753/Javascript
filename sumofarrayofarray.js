function sum(arr){
  var sum=0;
  var len=arr.length;
  
  for(i=0;i<arr.length;i++){
    if(a[i].length>0){
      for(var j=0;j<a[i].length;j++){
        sum=sum+a[i][j];
      } 
    }
    else{
    sum=sum+arr[i];
    }
  }
  return sum;
}
a=[[1,2,3],[1,2,3],1,2,3];
sum(a);
