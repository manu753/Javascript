function sort(a){
  var len=a.length;
  for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
      if(a[i]>a[j]){
        var temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }
    }
    
  }
  return a;
}
a=[5,1,2,4,1];
sort(a);
