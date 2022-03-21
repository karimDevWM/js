console.log('********** Todo ***********');
/////////////
// Version 2 - Avec des fonctions
/////////////
// Fonction pour afficher ma todolist
function displayTodos(tdl){ // execution avec listToDisplay <= myTodos
  console.log("Ma liste de todos: ", tdl);
}
// Fonction pour ajouter un todo
function addTodo(tdl,item){
  tdl.push(item);
  displayTodos(tdl);
}
// Fonction pour modifier un todo
function changeTodo(tdl,position,nouvelleValeur){
  tdl[position] = nouvelleValeur;
  displayTodos(tdl);
}
// Fonction pour supprimer un todo
function deleteTodo(tdl,position){
  tdl.splice(position,1);
  displayTodos(tdl);
}
// Execution / Test
let myTodos = ["item1","item2","item3"];
displayTodos(myTodos);
addTodo(myTodos,"faire autre chose");
changeTodo(myTodos,2,"encore un changement");
deleteTodo(myTodos,3);