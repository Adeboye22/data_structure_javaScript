var todos = ["Buy New Turtle"];
var input = prompt("what would you like to do?")

while(input !== "quit"){
    //handle input
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
        //ask for new to do
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo); 
    } else if(input === "delete") {
        //remove todos from behind
        todos.pop()
    } else if(input === "clear") {
        //remove all todos
        todos.length = 0;
    }

    //ask again for new input
    input = prompt("what would you like to do?")
}

console.log("OK, YOU QUIT THE APP");