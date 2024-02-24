// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add Button
addTask.addEventListener('click', function(){
    const taskText = inputTask.value.trim(); // Trim whitespace from input
    if (!taskText) { // Check if input is empty or contains only whitespace
        alert("Please Enter a Task");
        return; // Exit function if input is empty
    }

    // Create task elements
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.textContent = taskText;
    task.appendChild(li);

    const checkButton = createButton('check', '<i class="fa-solid fa-check"></i>', 'orange');
    task.appendChild(checkButton);
    
    const deleteButton = createButton('delete', '<i class="fa-solid fa-trash-can"></i>', 'red');
    task.appendChild(deleteButton);

    // Append task to task container
    taskContainer.appendChild(task);

    // Clear input field after adding task
    inputTask.value = "";
});

// Function to create buttons
function createButton(action, html, color) {
    const button = document.createElement('button');
    button.innerHTML = html;
    button.classList.add(`${action}Task`);
    button.style.backgroundColor = color;
    return button;
}

// Event delegation for check and delete buttons
taskContainer.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('checkTask')) {
        target.parentElement.style.textDecoration = "line-through";
    } else if (target.classList.contains('deleteTask')) {
        target.parentElement.remove();
    }
});
