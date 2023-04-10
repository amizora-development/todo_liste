const todo_input = document.getElementById("todo_input");
    const add_button = document.getElementById("add_button");
    const todo_ul = document.getElementById("todo_ul");

    add_button.addEventListener("click", () => {
        let input = todo_input.value;
        let newTodo = document.createElement("li");
        newTodo.innerText = input + " ";

        let delete_button = document.createElement("button");
        delete_button.innerText = "X";

        newTodo.appendChild(delete_button);
        todo_ul.appendChild(newTodo);
        todo_input.value ="";

        delete_button.addEventListener("click", () => {
        newTodo.remove();
        })
    })