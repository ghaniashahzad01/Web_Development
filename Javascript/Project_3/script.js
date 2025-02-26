// Elements ko select karo
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Task add karne ka function
function addTask() {
    if (taskInput.value.trim() === "") return; // Empty task add na ho

    // Naya <li> create karo
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    // Delete button create karo
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Task complete karne ka event
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // <li> ke andar delete button daal do
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Input field clear kar do
    taskInput.value = "";
}

// Button click par task add karo
addTaskBtn.addEventListener("click", addTask);

// Enter key press par bhi task add ho
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});
