const MAX_TASK_LENGTH = 120;

document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        if (taskText.length > MAX_TASK_LENGTH) {
            alert("Task length exceeds the maximum limit of " + MAX_TASK_LENGTH + " characters.");
            return;
        }

        const task = {
            text: taskText,
            completed: false,
        };

        let tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
        taskInput.value = "";
    }
}

function getTasks() {
    const tasksJson = localStorage.getItem("tasks");
    return tasksJson ? JSON.parse(tasksJson) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleTask(index) {
    let tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = function () {
            toggleTask(index);
        };

        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.classList.toggle("completed", task.completed);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteTask(index);
        };

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}
