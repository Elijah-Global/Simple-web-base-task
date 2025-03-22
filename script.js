const taskInput = document.getElementById('task-input');
const dropdown = document.getElementById('dropdown');
const tasklist = document.getElementById('task-list');

let tasks = [];
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === '') {
        alert('Please enter a task name');
        return;
    }

    const newTask = {
        description: taskName,
        category: dropdown.value,
        dateAdded: new Date(),
        completed: false,
    };

    tasks.push(newTask);
    taskInput.value = '';
    displayTasks();

}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function displayTasks() {

    tasklist.innerHTML = '';
    
    
    tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.className = `task-item ${task.category} ${task.completed ? 'completed' : ""}`
        
        
        const date = task.dateAdded.toLocaleDateString("en-US", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        });
      
        
        li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} onChange="toggleTask(${index}"><span>${task.description.toUpperCase()} (${task.category}) - ${date}</span>`

        tasklist.appendChild
        (li);

    })

}


console.log(tasks);



