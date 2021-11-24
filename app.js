const todoList = { 
    
    init: function() {
   
        this.addTodoButton = document.querySelector("#add-todo-button");
        this.filterOptions = document.querySelector(".filter-todos");
        this.todoListUl = document.querySelector("#todo-list");
        this.bind();
    
    },

    bind: function() {
        this.addTodoButton.addEventListener("click", this.addTodo);
        this.todoListUl.addEventListener("click", this.actionsTodos);
        this.filterOptions.addEventListener("change", this.filterTodos);
    
    },

    addTodo: function(e) {
        e.preventDefault();

        const todoListUl = document.getElementById("todo-list");
        const todoText = input.value;

        if (!todoText) return;

        const todoEl = `<li><span>${todoText}</span>
            <button class="complete" id="completeTodoButton"><i class="far fa-check"></i>Completed</button>
            <button class="delete" id="deleteTodoButton"><i class="far fa-trash-alt"></i>Delete</button>
            <button class="edit" id="editTodoButton"><i class="fas fa-edit"></i>Edit</button></li>`;
        input.value = "";
        input.focus();
    
        todoListUl.insertAdjacentHTML("beforeend", todoEl);
    },

    actionsTodos: function(e) {
        const item = event.target;
        const todo = item.parentElement;

        if (item.classList[0] === 'delete') {
            todo.remove();
        }

        if (item.classList[0] === 'complete') {
            todo.classList.toggle('completed');
        }

        if (item.classList[0] === 'edit') {
            const todo = item.parentElement;
            todo.children[0].setAttribute("contenteditable", "true");
            todo.children[0].focus();
        };
    },

    filterTodos: function(e) {
        const todoListUl = document.getElementById("todo-list");
        const todos = todoListUl.childNodes;
    
        todos.forEach(function(todo) {
        
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    console.log("completed")
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                break;

                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                break;
            }
        })
    },
}
document.addEventListener("DOMContentLoaded", function () {
	todoList.init();
});
