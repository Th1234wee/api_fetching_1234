const input = document.querySelector('#push');
const task = document.querySelector('#task');
const result = document.querySelector(".todo-list");
var todolist=[];
input.onclick = function(){
    todolist += task.value;
    if(task.value == 0){
        alert("Please enter your task");
    }
    if(todolist.length == 1){
        result.innerHTML =
        `
        <div class="hi">
            <div class="list-task" id="list">${task.value}</div>
            <div class="delete"><i class="fa-solid fa-trash"></i></div>
        </div> 
        `;
    }else if(todolist.length >1){
        result.innerHTML +=
        `
        <div class="hi">
            <div class="list-task" id="list">${task.value}</div>
            <div class="delete"><i class="fa-solid fa-trash"></i></div>
        </div>
        `;
    }
}