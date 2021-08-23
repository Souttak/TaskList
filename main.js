const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    if (taskInput.value != '' && taskInput.value != null) {
        // Creating task components.
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'finished');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Del';
        deleteButton.setAttribute('onclick', 'removeTask(this)');

        const newTask = document.createElement('li');
        newTask.classList.add('task');

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskContent');

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('taskDesc');
        taskDesc.innerHTML = taskInput.value;

        // Assembling the task.
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskDesc);

        newTask.appendChild(taskDiv);
        newTask.appendChild(deleteButton);

        // Appending the task to the task list.
        taskList.appendChild(newTask);
    }
}

function removeTask(task) {
    task.closest('li').remove();
}
