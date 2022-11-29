import { fetchData } from "./src/crud.js";
(()=>{
    fetchData().then(data => displayData(data))})();
function displayData(tasks){
    const taskContainer = document.querySelector(".tasks");
    let taskDiv = "";
    tasks.forEach(task => {
        taskDiv += `<div>
        <h2>${task.text}</h2>
        <h3>${task.date}</h3>
        <p>${task.description}</p>
        <span class="options">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
        </span>
        </div>`
    });
    taskContainer.innerHTML = taskDiv;
}