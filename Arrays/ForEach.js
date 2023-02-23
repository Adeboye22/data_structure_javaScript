/*
var colors = ["blue", "green", "pink", "purple", "orange", "white"];

function printColor(color) {
    console.log(color)
}

//iterate the function over the array
colors.forEach(printColor);


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function myNumber(numbers) {
    if (numbers % 3 === 0) {
        console.log("**********")
        console.log(numbers)
        console.log("**********")
    }
}

numbers.forEach(myNumber)
*/

var todoList = ["buy new shirt"];
var Add = prompt("What do you want to do?");

while (Add !== "Quit") {
    //handle input 
    if (Add === "List") {
        ListTodoList();
    } else if (Add === "New") {
        NewTodoList();
    } else if (Add === "Delete"){
        DeleteTodoList();
    }

    //ask again
    Add = prompt("What do you want to do?");
}

console.log("OKAY I QUIT!");

// functions

// List functions

function ListTodoList() {
    todoList.forEach(function(todo, i){
        console.log("******")
        console.log(todo + ": " + i)
        console.log("******")
    });
}

// Add a new todoList

function NewTodoList() {
    //ask for new to do

    var newTodo = prompt("Enter new todo");

    //A condition that takes it back to the homepage
    if (newTodo !== "Back") {
        todoList.push(newTodo);
        console.log("Added new todoList")
    } else {
        var Add = prompt("What do you want to do?");
    }
}

// Delete a todoList

function DeleteTodoList() {
    //ask for index of todoList to be deleted

    var index = prompt("Enter index of todoList to be deleted");

    //delete that todoList
    todoList.splice(index, )
    console.log("Deleted todoList")
}


