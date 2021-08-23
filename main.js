const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    if (taskInput.value != '' && taskInput.value != null) {
        // Creating task components.
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'finished');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTaskButton');
        deleteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"/>
                <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"/>
                <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"/>
            </svg>
        `;
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
        taskInput.value = '';
    }
}

function removeTask(task) {
    task.closest('li').remove();
}
