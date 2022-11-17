let taskList = [];
const sumbit = document.getElementById('submit')

sumbit.addEventListener('click', () => {

    let task = document.getElementById('task');
    const taskItem = {
        content: task.value,
        isValidated: false,
    }
    taskList.push(taskItem);
    addToLocalStorage(taskList);
    task.value = "";
})

getFromLocalStorage();

function displayList(list) {
    document.getElementById('list').innerHTML = '';
    for (let i = 0; i < list.length; ++i) {
        const isValidated = list[i].isValidated ? "validated" : "";
        document.getElementById('list').innerHTML += ` <div class="list-item"> <i onclick="validate(${i})" class="fa-solid fa-check"></i> <span data-index="${i}" class=" task-item ${isValidated}"> ${list[i].content} </span> 
    <button onclick="deleteItem(${i})" class="delete"> 
    <i class="fa-regular fa-trash"></i> </button> <button onclick="editTask(${i})" > <i class="fa-solid fa-pen-to-square"></i> </button> </div> `
    }
}


function getFromLocalStorage() {
    const list = localStorage.getItem('todos');
    if (list) {
        taskList = JSON.parse(list);
        displayList(taskList);
    }
}

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    displayList(todos);
}


function deleteItem(i) {
    taskList.splice(i, 1);
    addToLocalStorage(taskList);
}

function validate(i) {
    taskList[i].isValidated = true;
    const indexTo = 0;
    const el = taskList.splice(i, 1)[0];
    taskList.splice(indexTo, 0, el)
    addToLocalStorage(taskList);
}

function editTask(i) {
    const editedTask = document.querySelector(`[data-index="${i}"]`);
    editedTask.innerHTML = `<input type="text" id="input-edit" value="${taskList[i].content}" > <button id="validEdit"> valider </button>`
    document.getElementById('validEdit').addEventListener('click', () => {
        const edited = document.getElementById('input-edit').value
        console.log(edited);
        taskList[i].content = edited;
        addToLocalStorage(taskList);
    })
}




