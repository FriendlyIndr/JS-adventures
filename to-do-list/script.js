var list;

function addtask() {
    var list = document.getElementById("todolist");
    var task = document.getElementById("content").value;
    var entry = document.createElement('li');
    entry.textContent = task;
    list.appendChild(entry);
    document.getElementById("content").value = "";
}

function deletetask() {
    var index = document.getElementById("index").value;
    var list = document.getElementById("todolist");
    list.removeChild(list.children[index-1]);
    document.getElementById("index").value = "";
}

function edittask() {
    var index = document.getElementById("index").value;
    var list = document.getElementById("todolist");
    var task = document.getElementById("content").value;
    list.children[index - 1].innerHTML = task;
    document.getElementById("content").value = "";
    document.getElementById("index").value = "";
}