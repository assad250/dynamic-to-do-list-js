document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event listener to remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        // Append the remove button to the <li> element
        newTask.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally call addTask initially if you want to have it run on page load
    // addTask(); // Uncomment if you want to run addTask on DOMContentLoaded
});
