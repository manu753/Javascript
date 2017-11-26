//linked list 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//iterative
function printlist(list){
  let temp=list;let sum=0;
  while(temp){
    console.log(temp.value);
    temp=temp.next;
  }
}
printlist(list);

//recursive
function printlist1(list){
  console.log(list.value);
  if(list.value){
    printlist1(list.next);
  }
}

printlist1(list);
