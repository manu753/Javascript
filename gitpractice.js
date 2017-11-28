var gitusers=new Promise(function(resolve,reject){
  var url="https://api.github.com/users";
  var connect_user=new XMLHttpRequest();
  //console.log(connect_user);
  connect_user.onreadystatechange=function(){
  if(this.status==200 && this.readyState==4){
     var response=connect_user.response;
     var parsed_usr_data=JSON.parse(response);
    // console.log(parsed_usr_data);
     resolve(parsed_usr_data);
      
  }
  else
  if(this.status==404 || this.status==402){
  		console.log(this.statusText)
  		reject(this.statusText);
  }
  }
  connect_user.open('GET',url,true);
  connect_user.send();
});
gitusers.then(function(response){
 console.log(response[0]);
		var username=[];
    for(var i=0; i<response.length;i++){
       username.push(response[i].login);
    }
    console.log(username);
    
}).catch(function(response){
	console.log(response);
});
