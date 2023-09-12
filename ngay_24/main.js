var todo = document.querySelector(".todo-app");
var form = document.querySelector(".todo-form");
var input = document.querySelector(".todo-input");

function addTodoList(valueInput) {
    return `<div class="todo-item">
  <p class="">${valueInput}</p>
  <div class="todo-item-icon">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
  </div>
</div>`;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valueInput = input.value;
    if (valueInput.length !== 0) {
        var addItem = addTodoList(valueInput);
        todo.insertAdjacentHTML("beforeend", addItem);
        input.value = "";
    }
});

todo.addEventListener("click", function (e) {
    var valueInput = document.querySelector(".todo-item p");
    var inputEdit = document.querySelector(".todo-input-item");
    if (e.target.className === "fa-solid fa-pen-to-square") {
        e.target.parentElement.parentElement.remove();
        var html = ` <form class="todo-form">
    <input
      type="text"
      class="todo-input-item"
      placeholder="What is the task today?"
      value="${valueInput.innerText}"
    />
    <button type="button" class="todo-btn-item">Add Task</button>
  </form>`;
        todo.insertAdjacentHTML("beforeend", html);
    }
    if (e.target.className === "todo-btn-item") {
        e.target.parentElement.remove();
        var valueEdit = addTodoList(inputEdit.value);
        todo.insertAdjacentHTML("beforeend", valueEdit);
    }
});

todo.addEventListener("click", function (e) {
    console.log(e.target.className);
    if (e.target.className === "") {
        e.target.classList.add("checked");
    } else if (e.target.className == "checked") {
        e.target.classList.remove("checked");
    }
});

todo.addEventListener("click", function (e) {
    if (e.target.className === "fa-solid fa-trash") {
        e.target.parentElement.parentElement.remove();
    }
});