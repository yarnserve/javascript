const todoList = document.querySelector('.todo_list')
const form = document.querySelector('form')
const input = form.querySelector('input')

let todos = []

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(e) {
  console.log(e.target.parentNode.id)
  e.target.parentNode.remove()

  const newTodos = todos.filter(
    item => item.id !== parseInt(e.target.parentNode.id)
  )
  todos = newTodos
  saveTodo()
}

function paintTodo(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerHTML = '&times;'
  li.innerText = text
  li.id = todos.length + 1
  li.appendChild(span)
  todoList.appendChild(li)

  span.addEventListener('click', removeTodo)

  todos.push({
    id: todos.length + 1,
    text
  })

  saveTodo()
}

function handleSubmit(e) {
  e.preventDefault()

  if (input.value) {
    paintTodo(input.value)
    form.reset()
  } else {
    return
  }
}

function loadTodo() {
  const data = JSON.parse(localStorage.getItem('todos'))
  if (data) {
    data.forEach(item => paintTodo(item.text))
  }
}

function init() {
  loadTodo()
  form.addEventListener('submit', handleSubmit)
}

init()
