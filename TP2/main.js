window.localStorage;

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

let isFullscreenEnabled = false;
let tasks = [];

/*
    Using modular code makes neccessary to make global every function used by the DOM explicitly, but I think it's worth it.
    You'll see what I'm talking about at the bottom of this file.
*/

import {
    checkbox,
    checkedCheckbox,
    shareButton,
    copyButton,
    deleteButton,
    activateFullscreenButton,
    deactivateFullscreenButton,
} from './components.js';

const getTasksFromStorage = () => {
    if ('localStorage' in window) {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    } else {
        return [];
    }
};

const setTasksInStorage = () => {
    if ('localStorage' in window) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Saved!');
    } else {
        alert('Local storage not supported!');
    }
};

const buildTask = (description, done = false) => {
    let newTask = document.createElement('li');
    newTask.classList.add('task');

    if (done) {
        newTask.innerHTML = `
            <div class="taskContent">
                ${checkedCheckbox}
                <p class="taskDesc">${description}</p>
            </div>
            <div class="taskButtons">
                ${shareButton}
                ${copyButton}
                ${deleteButton}
            </div>
        `;
    } else {
        newTask.innerHTML = `
            <div class="taskContent">
                ${checkbox}
                <p class="taskDesc">${description}</p>
            </div>
            <div class="taskButtons">
                ${shareButton}
                ${copyButton}
                ${deleteButton}
            </div>
        `;
    }
    return newTask;
};

const addTask = async (task = null) => {
    if (task) {
        const newTask = buildTask(task.desc, task.done);
        taskList.appendChild(newTask);
    } else {
        const taskDesc = taskInput.value.trim();
        if (taskDesc != '' && taskDesc != null) {
            // Adding the new task to the DOM.
            const newTask = buildTask(taskDesc);
            taskList.appendChild(newTask);
            taskInput.value = '';

            // Storing the task as a JSON object for future recovery.
            tasks.push(
                JSON.stringify({
                    id: new Date().getTime(),
                    desc: taskDesc,
                    done: false,
                    location: await getLocation(),
                })
            );
            setTasksInStorage();
        }
    }
};

const removeTask = (reference) => {
    const taskDesc = reference.closest('li').childNodes[1].innerText;
    reference.closest('li').remove();

    tasks = tasks.filter((task) => JSON.parse(task).desc != taskDesc);
    setTasksInStorage();
};

const updateTask = (reference) => {
    const taskDesc = reference.closest('li').childNodes[1].innerText;
    const index = tasks.findIndex((task) => JSON.parse(task).desc == taskDesc);

    if (index > -1) {
        let task = JSON.parse(tasks[index]);
        task.done = !task.done;
        tasks[index] = JSON.stringify(task);
        setTasksInStorage();
    } else {
        console.warn("The task couldn't be updated due to a failure finding its index.");
    }
};

const shareTask = (reference) => {
    let taskDesc = reference.closest('li').innerText.trim();
    navigator.share({
        title: '¡Mira esta tarea!',
        text: taskDesc,
    });
};

const copyTask = (reference) => {
    let taskText = reference.closest('li').innerText.trim();
    navigator.clipboard.writeText(taskText);
};

const fullscreen = (reference) => {
    if (document.fullscreenEnabled) {
        if (isFullscreenEnabled) {
            document.exitFullscreen();
            reference.closest('div').innerHTML = `
                <div id="title">
                    <h1>TASK LIST [TP 2]</h1>
                    ${activateFullscreenButton}
                </div>
            `;
            isFullscreenEnabled = !isFullscreenEnabled;
        } else {
            document.getElementById('taskListMainPage').requestFullscreen();
            reference.closest('div').innerHTML = `
                <div id="title">
                    <h1>TASK LIST [TP 2]</h1>
                    ${deactivateFullscreenButton}
                </div>
            `;
            isFullscreenEnabled = !isFullscreenEnabled;
        }
    } else {
        alert("Your browser doesn't support fullscreen mode.");
    }
};

const getLocation = async () => {
    if ('geolocation' in navigator) {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        };
    } else {
        alert("Your browser doesn't support geolocation.");
        return {
            lat: null,
            lon: null,
        };
    }
};

window.onload = () => {
    tasks = getTasksFromStorage();
    tasks.forEach((task) => {
        addTask(JSON.parse(task));
    });
};

// Making all the functions global so they can be called from the DOM.
window.addTask = addTask;
window.removeTask = removeTask;
window.updateTask = updateTask;
window.shareTask = shareTask;
window.copyTask = copyTask;
window.fullscreen = fullscreen;
