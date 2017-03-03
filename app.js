//APPLICATION STATE
//1- create state object
//2- create state modfication functions
//3- create render functions
//4- create event listeners


//1- CREATE STATE OBJECT
var state = {
  items: [

  ]
};

//2- CREATE modfication functions


function addItem(state, item){
  state.items.push(item);
}

function removeItem(state, itemID){
  state.items.splice(itemID-1, 1);
}

addItem(state, 'a item');
addItem(state, 'b item');
addItem(state, 'c item');
addItem(state, 'd item');
console.log(state);
removeItem(state, )
