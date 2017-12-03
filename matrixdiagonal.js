function matrix(a){
 var sum=0;var rev=0;var trev=0
   for(i=0;i<a.length;i++){
       trev=a[i].length;
       for(j=0;j<a[i].length;j++){
           if(i==j){
               //console.log(a[i][j]);
              sum =sum + a[i][j];
           }
       } rev=rev+a[i][trev-(i+1)];
   }
    console.log(Math.abs(sum-rev));
 }
 var a=[[1,2,3],[4,5,6],[7,8,9]];
 matrix(a);
