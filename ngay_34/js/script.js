const addBtn = document.querySelector(".btn-add");
const boxAddTask = document.querySelector(".box-add-task");
const btnSave = boxAddTask.querySelector(".save-btn");
const btnCancel = boxAddTask.querySelector(".cancel-btn");
const taskList = document.querySelector(".task-list");
const taskDone = document.querySelector(".task-list-done");
const searchInput = document.querySelector(".search-input")

const getTodo = async () => {
    const response = await fetch(`${task}`);
    const data = await response.json();
    return data;
};

const postTodo = async (data) => {
    const response = await fetch(`${task}`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json();
};

const deleteTodo = async (id) => {
    const response = await fetch(`${task}/${id}`, {
        method: "Delete",
    });
    return response.json();
};

const updateTodo = async (id, data) => {
    const response = await fetch(`${task}/${id}`, {
        method: "Patch",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

async function render() {
    const data = await getTodo()
    const listTodoComplete = data.filter((todo) => todo.status === "true")
    const listTodoUnComplete = data.filter((todo) => todo.status === "false")
    var tagControlTodo = `<div class="task-option">
  <button class="btn-option delete-option">
    <i class="fa-solid fa-trash-can"></i>
  </button>
  <button class="btn-option edit-option">
    <i class="fa-regular fa-pen-to-square"></i>
  </button>
  <button class="btn-option complete-option">
    <i class="fa-solid fa-check"></i>
  </button>
</div>`

    const tagItemHtml = listTodoComplete.map((item) => `
  <div class="task-item">
    <p class="task-title">${item.title}</p>
    ${tagControlTodo}
  </div>
  `).join("");

    const tagItemUnHtml = listTodoUnComplete.map((item) => `
  <div class="task-item">
    <p class="task-title">${item.title}</p>
    ${tagControlTodo}
  </div>
  `).join("");

    const tagItemComplete = document.createElement("div")
    tagItemComplete.innerHTML = tagItemHtml
    task_list_done.append(tagItemComplete)

    const tagItemUnComplete = document.createElement("div")
    tagItemUnComplete.innerHTML = tagItemUnHtml
    taskList.append(tagItemUnComplete)
};

function addTodo() {
    addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        boxAddTask.classList.add("show");
    });

    document.querySelector(".inner-box").addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        boxAddTask.classList.remove("show");
    });

    btnCancel.addEventListener("click", () => {
        boxAddTask.classList.remove("show");
    });

    btnSave.addEventListener("click", async () => {
        const inputEl = boxAddTask.querySelector(".add-input");
        const valueInput = inputEl.value;
        const data = {
            status: "false"
        }
        data.title = valueInput
        await postTodo(data)
        inputEl.value = "";
        boxAddTask.classList.remove("show");
        render()
    })
};

function deleteTaskTodo() {
    const removeUnfinished = taskList.querySelectorAll(".delete-option");
    const removeFinished = taskDone.querySelectorAll(".delete-option");
    removeUnfinished.forEach((removeBtn, i) => {
        removeBtn.addEventListener("click", async (e) => {
            const data = await getTodo();
            const todoUnfinished = data.filter((todo) => {
                return todo.status === "false";
            });

            await deleteTodo(todoUnfinished[i].id);
            render();
        });
    });

    removeFinished.forEach((removeBtn, i) => {
        removeBtn.addEventListener("click", async (e) => {
            const data = await getTodo();
            const todoFinished = data.filter((todo) => {
                return todo.status === "true";
            });

            await deleteTodo(todoFinished[i].id);
            render();
        });
    });
};

function start() {
    render()
    addTodo()
    deleteTaskTodo()
}
