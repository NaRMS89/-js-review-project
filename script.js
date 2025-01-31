let todo = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList= document.getElementById('todo-list');

function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className ='todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}
function addTodo(event) {
    Event.preventDefault();
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo) {
        todo.push(newTodo);
        todoInput.value = ''; 
        renderTodos();
    }
}

function editTodo(index) {
    const updateTodo = promt('Edit your todo:', todos[index]);
    if (updateTodo !== null) {
        todo[index] = updateTodo.trim();
        renderTodos();
    }
}

todoForm.addEventListener('submit', addTodo);

rendertodoList();

