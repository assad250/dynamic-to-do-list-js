document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage or initialize an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Populate the task list with the stored tasks
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to prevent saving again
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Check if the task text is empty
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create and configure a new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add event listener to remove button
        removeButton.addEventListener('click', function() {
            // Remove the task from the DOM
            taskList.removeChild(newTask);

            // Remove the task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        });

        // Append the remove button to the <li> element
        newTask.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';

        // Save the task to Local Storage if indicated
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', function() {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
