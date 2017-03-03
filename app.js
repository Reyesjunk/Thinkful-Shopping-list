
//APPLICATION STATE
//1- create state object
//2- create state modfication functions
//3- create render functions
//4- create event listeners




//1- CREATE STATE OBJECT
// Add apples, oranges, milk, and bread as default values
var state = {
  items: [
    {item:'apples', checked:false},
    {item:'oranges', checked:false},
    {item:'milk', checked:true},
    {item:'bread', checked:false},
  ]
};
/*2- CREATE modfication functions  CRUD

function addItem(userinput){

	add item. set default check state to false.
}*/

function addItem(state, item){
	state.items.push({item:item, checked:false});
}

/*
function checkItem() {
	add checked state. true / false.
}
function removeItem(){
	remove item from state
}
*/

/*
//3- CREATE RENDER FUNCTIONS
founction renderDOM(){
	render current state of list to the DOM
}
	function renderDOM(){}  populate inside $('.shopping-list')
	function addfromDOM{}
	function deletefromDOM(){}
	function checkiteminDOM(){}

*/
function renderDOM(){
  let htmlString = ``;
  $('.shopping-list').empty();
  for (let i=0; i<state.items.length; i++){
    $('.shopping-list').append(`<li class="item-${i}"><span class="shopping-item">${state.items[i].item}</span></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  }
  checkItemInDom();
}
function checkItemInDom(){
  for (let i=0; i<state.items.length; i++){
    if(state.items[i].checked){
      $(`.item-${i} .shopping-item`).addClass('shopping-item__checked');
    }
  }
}
function removeItem(state, itemID){

}


//4- HANDLE EVENTS
/*
	load the List
	listen for add item Click
	listen for delete item Click
    toggle item checked

*/
$(document).ready(function(){
  renderDOM();
  $('form').submit(function(event){
  	event.preventDefault();
  	let userInput = $('#shopping-list-entry').val();
  	addItem(state, userInput);
  	renderDOM();
  	console.log(state.items);
  	//$('#shopping-list-entry').reset();
  });
});
