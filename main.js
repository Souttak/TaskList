const checkbox = `<input type="checkbox" name="finished">`;
const deleteButton = `<button onclick="removeTask(this)">Del</button>`;

function addTask() {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value != '' && taskInput.value != null) {
        const newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.innerHTML = `<div class="taskContent"> ${checkbox} <p class="taskDesc"> ${taskInput.value} </p></div> ${deleteButton}`;
        taskList.appendChild(newTask);
    }
}

function removeTask(task) {
    task.closest('li').remove();
}