//linked list to pint value in reverse
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
  let temp=list;let values=[];
  while(temp){
    values.push(temp.value);
    temp=temp.next;
  }
  for(i=values.length-1 ; i >= 0; i--){
    console.log(values[i]);
  }
  
}
printlist(list);

//recursive
function printList(list) {

   // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }
  console.log(list.value);
}

printList(list);

//printlist1(list);
