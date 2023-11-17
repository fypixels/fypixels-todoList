function renderTodoList() {
  let todoListHTML = '';
  
  if (todoList.length === 0) {
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
    return;
  } 
  
  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name
    // const dueDate = todoObject.dueDate
    const {name, dueDate} = todoObject
    // const html = `<p>${todo}</p>`
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="todoList.splice(${i}, 1); renderTodoList()" class="delete-todo-btn">Delete</button>
  `;
    todoListHTML += html; 
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

// let todoList = [{
//   name: '',
//   dueDate: '',
// },
// ];
let todoList = [];
function addTodo() {
  const inputElement = document.querySelector(".js-todo-btn");
  const name = inputElement.value;

  if (!name) {
    return;
  }

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value

  todoList.push({name, dueDate});
  // console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}