const taskForm = document.getElementById('create-task-form')
const newTask = document.getElementById('new-task-description')
const toDo = document.getElementById('tasks')


document.addEventListener("DOMContentLoaded", () => {

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    buildToDo()
    form.reset()
  })

});


function buildToDo() {
  let ul = document.createElement('ul')
  let btn = document.createElement('button')

  btn.addEventListener('click', handleDelete)

  btn.textContent = 'X'
  ul.textContent = `${newTask.value}`

  ul.appendChild(btn)
  toDo.appendChild(ul)
}


function handleDelete(event) {
  event.target.parentNode.remove()
}