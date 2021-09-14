/*
    This file has the only purpose of making the main script as little and readable as possible.
    It was impossible to make it look clean having this components taking all the space!
*/

const checkbox = `<input type="checkbox" name="finished" onclick="updateTask(this)">`;
const checkedCheckbox = `<input type="checkbox" name="finished" onclick="updateTask(this)" checked="true">`;

const shareButton = `
    <button class="shareTaskButton" onclick="shareTask(this)" aria-label="Share task">
        <svg width="100%" height="100%">
            <circle fill="none" cx="17.5" cy="18.5" r="1.5"></circle>
            <circle fill="none" cx="5.5" cy="11.5" r="1.5"></circle>
            <circle fill="none" cx="17.5" cy="5.5" r="1.5"></circle>
            <path d="M5.5,15c0.91,0,1.733-0.358,2.357-0.93l6.26,3.577C14.048,17.922,14,18.204,14,18.5c0,1.93,1.57,3.5,3.5,3.5 s3.5-1.57,3.5-3.5S19.43,15,17.5,15c-0.91,0-1.733,0.358-2.357,0.93l-6.26-3.577c0.063-0.247,0.103-0.502,0.108-0.768l6.151-3.515 C15.767,8.642,16.59,9,17.5,9C19.43,9,21,7.43,21,5.5S19.43,2,17.5,2S14,3.57,14,5.5c0,0.296,0.048,0.578,0.117,0.853L8.433,9.602 C7.808,8.64,6.729,8,5.5,8C3.57,8,2,9.57,2,11.5S3.57,15,5.5,15z M17.5,17c0.827,0,1.5,0.673,1.5,1.5S18.327,20,17.5,20 S16,19.327,16,18.5S16.673,17,17.5,17z M17.5,4C18.327,4,19,4.673,19,5.5S18.327,7,17.5,7S16,6.327,16,5.5S16.673,4,17.5,4z M5.5,10C6.327,10,7,10.673,7,11.5S6.327,13,5.5,13S4,12.327,4,11.5S4.673,10,5.5,10z"></path>
        </svg>
    </button>
`;

const copyButton = `
    <button class="copyTaskButton" onclick="copyTask(this)" aria-label="Copy task">
        <svg width="100%" height="100%">
            <path d="M19,3h-2.25c0-0.553-0.447-1-1-1h-7.5c-0.553,0-1,0.447-1,1H5C3.897,3,3,3.897,3,5v15c0,1.103,0.897,2,2,2h14 c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M19,20H5V5h2v2h10V5h2V20z"></path>
        </svg>
    </button>
`;

const deleteButton = `
    <button class="deleteTaskButton" onclick="removeTask(this)" aria-label="Delete task">
        <svg width="100%" height="100%">
            <path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path>
            <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path>
            <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path>
        </svg>
    </button>
`;

const activateFullscreenButton = `
    <button id="fullscreenButton" onclick="fullscreen(this)" aria-label="Activate fullscreen">
        <svg width="100%" height="100%">
        <path d="M5 5L10 5 10 3 3 3 3 10 5 10zM10 19L5 19 5 14 3 14 3 21 10 21zM21 14L19 14 19 19 14 19 14 21 21 21zM19 10L21 10 21 3 14 3 14 5 19 5z"/>
        </svg>
    </button>
`;

const deactivateFullscreenButton = `
    <button id="fullscreenButton" onclick="fullscreen(this)" aria-label="Deactivate fullscreen">
        <svg width="100%" height="100%">
        <path d="M10 4L8 4 8 8 4 8 4 10 10 10zM8 20L10 20 10 14 4 14 4 16 8 16zM20 14L14 14 14 20 16 20 16 16 20 16zM20 8L16 8 16 4 14 4 14 10 20 10z"/>
        </svg>
    </button>
`;

export { checkbox, checkedCheckbox, shareButton, copyButton, deleteButton, activateFullscreenButton, deactivateFullscreenButton };
