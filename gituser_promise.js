function loaduser(){
return new Promise(function(resolve,reject){
			var url="https://api.github.com/users";
      var getuser=new XMLHttpRequest();
      getuser.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        var userlist=getuser.response;
        var data=JSON.parse(userlist);
        //console.log(userlist);
				resolve(data);
      }
     else
       if(this.status==404 || this.status==403 ){
      	reject(this.status);
        }
      }
        getuser.open("get",url,true);
        getuser.send();
});
}
loaduser().then(function(response){
			console.log(response);
}).catch(function(response){
			console.log(response);
});
