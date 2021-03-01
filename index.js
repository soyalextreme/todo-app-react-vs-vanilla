// variables globales

let tasks = [
  {
    id: Math.random(),
    title: "Example title",
    desc:
      "Description example for this example notes, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus diam. Fusce tempor justo eu tempor eleifend. Aenean quis elementum sem.",
    done: false,
  },
];

// selectores

const popModal = document.querySelector("#pop-modal");
const btnModal = document.querySelector("#btn-modal");
const titleField = document.querySelector("#title-field");
const descField = document.querySelector("#desc-field");
const btnDelTask = document.querySelector("#btn-del-task");
const btnAddTask = document.querySelector("#adder");
const taskSection = document.querySelector(".tasks");
const btnForm = document.querySelector(".btn-form");
const closeModalForm = document.querySelector("#close-modal-form");
const formInput = document.querySelector(".form");

// funciones

const hideModal = () => (popModal.style.display = "none");

const showAdderForm = () => {
  formInput.style.display = "flex";
};

const hideAdderForm = () => {
  formInput.style.display = "none";
};

function eventForm() {
  const title = titleField.value;
  const desc = descField.value;

  if (title.length === 0 || desc.length === 0) {
    alert("Empty Note, please add something!");
    return;
  }

  let newTask = {
    id: Math.random(),
    title,
    desc,
    done: false,
  };

  tasks.push(newTask);
  loadTasks();
  hideAdderForm();
  titleField.value = "";
  descField.value = "";
}

function searchIndexTask(id) {
  let returnIndex;
  tasks.map((task, index) => {
    if (task.id === id) {
      returnIndex = index;
    }
  });
  return returnIndex;
}

function updateStatus(id) {
  let index = searchIndexTask(id);
  tasks[index].done = !tasks[index].done;
  loadTasks();
}

function deleteTask(id) {
  let index = searchIndexTask(id);
  tasks.splice(index, 1);
  loadTasks();
}

const loadTasks = () => {
  if (tasks.length === 0) {
    taskSection.innerHTML = `
        <h2 class="title-no-tasks font-title"> No tienes tareas pendientes! 🙌</h2>
        `;
    return;
  }

  taskSection.innerHTML = "";

  tasks.forEach((task) => {
    taskSection.innerHTML += `
        <div class="single-task">
            <div class="content-task"> 
                <h4 class="font-title title-task ${task.done && "labeled"}"> ${
      task.title
    }</h4>
                <p class="font-content task ${task.done && "labeled"}"> ${
      task.desc
    }</p>
            </div>
            <div class="actions">
                <div class="status-container font-content font-bold"> 
                    ${
                      task.done
                        ? `<a class="status done" onclick="updateStatus(${task.id})">DONE</a>`
                        : `<a class="status pending" onclick="updateStatus(${task.id})">pending</a>`
                    }
                </div>
                <a class="btn-del" onclick='deleteTask(${
                  task.id
                })' id="btn-del-task">🗑️</a>
            </div>
        </div>`;
  });
};

// Eventos

btnModal.addEventListener("click", hideModal);
btnForm.addEventListener("click", eventForm);
btnAddTask.addEventListener("click", showAdderForm);
closeModalForm.addEventListener("click", hideAdderForm);

loadTasks();
