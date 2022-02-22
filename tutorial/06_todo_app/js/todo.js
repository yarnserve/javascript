const todoList = document.querySelector(".todo_list");
const form = document.querySelector("form");
const input = form.querySelector("input");

// 1. 접속 --> 만약에 투두가 있으면 투두를 가져온다.
// 2. 접속 --> 없으면 작성하면 된다.
// 3. 인풋에서 투두를 작성하면 사용자 배열에 저장을 하고,,
// 4. 그 배열을 로컬 스토리지에 저장을 한다.

let todos = [];

function removeTodo(e) {
  console.log(e.target.parentNode.id);
  e.target.parentNode.remove();

  const newTodos = todos.filter((item) => {
    item.id !== e.target.parentNode.id;
  });

  todos = newTodos;

  console.log(todos);
  console.log(newTodos);
}

function paintTodo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = "&times;";
  li.innerText = text;
  li.id = todos.length + 1;
  li.appendChild(span);
  todoList.appendChild(li);

  todos.push({
    id: todos.length + 1,
    text,
  });

  span.addEventListener("click", removeTodo);
}

function handleSubmit(e) {
  e.preventDefault();

  if (input.value) {
    paintTodo(input.value);
    form.reset();
  } else {
    return;
  }
}

function loadTodo() {
  console.log("할 일을 가져온다......");
}

function init() {
  loadTodo();
  form.addEventListener("submit", handleSubmit);
}

init();
